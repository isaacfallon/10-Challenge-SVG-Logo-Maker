// Import the destructured classes of 'Circle' 'Square' and 'Triangle' from shapes.js.
const { Circle, Square, Triangle } = require(`./shapes`);

// A shape testing suite is set up for us to contain our specific shape tests. 
describe(`Shape testing suite`, ()=> {
    // First, we set up a testing suite for creating a circle shape. 
    describe(`Circle test`, ()=> {
        it(`The circle shape as the colour 'blue' should render to screen`, ()=> {
            // To test how we would create a circle, we create a new instance of the 'Circle()' class and assign it to the 'shape' variable. 
            const shape = new Circle();
            // Then, the shape containing the new circle element has a colour set to blue. 
            shape.setShapeColor(`blue`);
            // Finally, to test that we have created a circle shape with a colour of blue, 
            // we expect to see the shape's render method equal the specific circle code (which is "<circle cx="150" cy="100" r="80" fill="blue" />")
            // The test should pass if the Circle class and 'setShapeColor' methods are made correctly. 
            expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`)
        })
    })
    // Then we do the same test for the square and triangle classes
    describe(`Square test`, ()=> {
        it(`The square shape as the colour 'blue' should render to screen`, ()=> {
            const shape = new Square();
            shape.setShapeColor(`blue`);
            // The main difference with this test for our square is the SVG code will be different for a square. 
            expect(shape.render()).toEqual(`<rect x="90" y="40" width="120" height="120" fill="blue" />`)
        })
    })
    describe(`Triangle test`, ()=> {
        it(`The triangle shape as the colour 'blue' should render to screen`, ()=> {
            const shape = new Triangle();
            shape.setShapeColor(`blue`);
            // The main difference with this test for our square is the SVG code will be different for a triangle. 
            expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`)
        })
    })
});