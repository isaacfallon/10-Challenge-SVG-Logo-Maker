// Import 'inquirer' and 'writeFile' modules
const inquirer = require(`inquirer`);
const { writeFile } = require(`fs/promises`);

// Import 'SVG' and 'shapes' file
const SVG = require(`./lib/svg`);
const { Circle, Square, Triangle } = require(`./lib/shapes`);

// Create a function to check the validation of the user input for the text inside the shape. If the text length is longer than 3, return a message informing the user. Otherwise, return true so the prompt chain can continue. 
const checkShapeText = async (input) => {
    if (input.length > 3) {
        return `Please enter text with 3 or less characters`
    }
return true;
}

// Inquirer prompt chain to get text in shape, text colour, shape and shape colour
inquirer.prompt([
    {
        type: `input`,
        message: `Enter text for the logo. (Must not be more than 3 characters)`,
        name: `shapeText`,
        validate: checkShapeText,
    },
    {
        type: `input`,
        message: `Enter a text color.`,
        name: `textColor`,
    },
    {
        type: `list`,
        message: `Select a shape for the logo`,
        name: `shapeType`,
        choices: [`circle`, `square`, `triangle`]
    },
    {
        type: `input`,
        message: `Enter a shape color`,
        name: `shapeColor`,
    }
])
.then(({ shapeText, textColor, shapeType, shapeColor })=> {

    let shapeRender;

    if (shapeType === `circle`) {
        shapeRender = new Circle();
    } else if (shapeType === `square`) {
        shapeRender = new Square();
    } else {
        shapeRender = new Triangle();
    }
    shapeRender.setShapeColor(shapeColor);

    const svg = new SVG();
    svg.setShape(shapeRender);
    svg.shapeTextAndColor(shapeText, textColor);

// Create svg file using the 'writeFile' module
writeFile(`logo.svg`, svg.render())
  .then(() => {
    console.log(`Generated logo.svg`);
  });

})



