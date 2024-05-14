// Import 'inquirer' and 'writeFile' modules
const inquirer = require(`inquirer`);
const { writeFile } = require(`fs/promises`);

// Import 'SVG' and 'shapes' files in the 'lib' folder
const SVG = require(`./lib/svg`);
const { Circle, Square, Triangle } = require(`./lib/shapes`);

// Create a function to check the validation of the user input for the text inside the shape. 
// If the text length is longer than 3, return a message which is logged to console during the prompt process. Otherwise, return true so the prompt chain can continue. 
const checkShapeText = async (input) => {
    if (input.length > 3) {
        return `Please enter text with 3 or less characters`
    }
return true;
}

// Inquirer prompt chain to get text in shape, text colour, shape type and shape colour.
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
// The 'then()' method of our promise takes in the destructured elements that make up our SVG file
.then(({ shapeText, textColor, shapeType, shapeColor })=> {

    // Set an empty variable we can set a shape class to. 
    let shapeRender;

    // Set the shape to either a Circle(), Square() or Triangle() class from our imported 'shapes' file based on the user input. 
    if (shapeType === `circle`) {
        shapeRender = new Circle();
    } else if (shapeType === `square`) {
        shapeRender = new Square();
    } else {
        shapeRender = new Triangle();
    }
    // Then call the 'setShapeColor' class we made to set the user's colour choice as the shape's colour. 
    shapeRender.setShapeColor(shapeColor);

    // We call a new SVG() class element to create the bulk of the SVG code our image will be made from. 
    const svg = new SVG();
    // We call our setShape() method to add the shape code to the SVG code depending on what the user input. 
    svg.setShape(shapeRender);
    // Here we do the same thing, but for the text inside the shape and the colour of the text. 
    svg.shapeTextAndColor(shapeText, textColor);

// Then we use the writeFile() fs method to create the actual SVG file in our project named 'logo.svg'.
writeFile(`logo.svg`, svg.render())
  .then(() => {
    // If it is created successfully, log this 'generated logo' message to console.
    console.log(`Generated logo.svg`);
  })
  .catch((error) => {
    // If there is an error, log the error and an error message to console. 
    console.log(error),
    console.log(`An error has been found.`);
  })
})



