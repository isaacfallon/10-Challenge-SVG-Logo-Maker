// Import the SVG and the destructured shape classes of Circle, Square and Triangle. 
const SVG = require(`./svg`);
const { Circle, Square, Triangle } = require(`./shapes`);

// We have a testing suite which checks the actual SVG code created by our SVG class.
describe(`Testing suite for user input to create SVG code`, ()=> {
    // This first testing suite checks the user input to see if it creates the correct shape type. 
    describe(`Testing user input for shape type`, ()=> {
        // In this testing example, it should take the shape text of 'aAa' with the text colour of 'red'. 
        it(`SVG file should take in user input for shape text of "aAa" and text colour of "red"`, ()=> {
            // To test this, we create a new instance of the SVG class, then call the 'shapeTextAndColor' method to set the text of 'aAa' with the text colour of 'red'.
            const svg = new SVG();
            svg.shapeTextAndColor(`aAa`, `red`);
            // We should expect to see the SVG's render method equal the specific code that would be created for the text of 'aAa' with the text colour of 'red'.
            expect(svg.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="115" font-size="50" text-anchor="middle" fill="red">aAa</text></svg>`)
        })
    })
    // Here, we set a testing suite to check all aspects of creating the code for our SVG file.  
    describe(`TESTING EVERYTHING: Testing every user input with a blue circle as example case`, ()=> {
        // In this testing example, the shape text is 'zZz' with a text colour of 'blue' for a blue circle shape. 
        it(`SVG file should take in user input for shape text of "zZz" and text colour of "blue" for a blue circle`, ()=> {
            // First, we create new instances of SVG and Circle class. 
            const svg = new SVG();
            const shape = new Circle();
            // Then we call the 's'etShapeColor' method to set the circle to be blue. 
            shape.setShapeColor(`blue`);
            // Then, we create the actual SVG code for a blue circle by calling the 'setShape' method for our newly created svg instance. 
            svg.setShape(shape);
            // Then, we set the text to 'ZZZ' and text colour of 'blue' by calling the 'shapeTextAndColor' method for our newly created svg instance. 
            svg.shapeTextAndColor(`ZZZ`, `blue`);
            // We should expect to see the SVG's render method equal the specific code that would be created for the text of 'ZZZ' with the text colour of 'blue' for a blue circle. 
            expect(svg.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="115" font-size="50" text-anchor="middle" fill="blue">ZZZ</text></svg>`)
        })
    })
});