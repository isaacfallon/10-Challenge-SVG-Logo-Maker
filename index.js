// Import 'inquirer' and 'writeFile' modules
const inquirer = require(`inquirer`);
const { writeFile } = require(`fs/promises`);

// Import 'SVG' and 'shapes' file
// const svg = require(`./lib/svg`)
// const shapes = require(`./lib/shapes`)

// Inquirer prompt chain to get text in shape, text colour, shape and shape colour

let shape = ``;

inquirer.prompt([
    {
        type: `input`,
        message: `Enter text for the logo. (Must not be more than 3 characters)`,
        name: `shapeText`,
    },
    {
        type: `input`,
        message: `Enter a text color.`,
        name: `shapeTextColor`,
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
.then((response)=> {

    console.log(response.shapeType)
    console.log(response.shapeColor)
    if (response.shapeType === `circle`) {
        shape = `<circle cx="150" cy="100" r="80" fill="${response.shapeColor}" />`
    } else if (response.shapeType === `square`) {
        shape = `<rect x="90" y="40" width="120" height="120" fill="${response.shapeColor}" />`
    } else {
        shape = `<polygon points="150, 18 244, 182 56, 182" fill="${response.shapeColor}" />`
    }

    const data = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${shape}
<text x="150" y="115" font-size="50" text-anchor="middle" fill="${response.shapeTextColor}">${response.shapeText}</text>
</svg>`

// Create svg file using the 'writeFile' module
writeFile(`logo.svg`, data)
  .then(() => {
    console.log(`Generated logo.svg`);
  });

})



