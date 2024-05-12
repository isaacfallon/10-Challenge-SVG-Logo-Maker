const SVG = require(`./svg`);
const { Circle, Square, Triangle } = require(`./shapes`);

describe(`Testing suite for user input to create SVG code`, ()=> {
    describe(`Testing user input for shape type`, ()=> {
        it(`SVG file should take in user input for shape text of "aAa" and text colour of "red"`, ()=> {
            const svg = new SVG();
            svg.shapeTextAndColor(`aAa`, `red`);
            expect(svg.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="115" font-size="50" text-anchor="middle" fill="red">aAa</text></svg>`)
        })
    })
    describe(`TESTING EVERYTHING: Testing every user input with a blue circle as example case`, ()=> {
        it(`SVG file should take in user input for shape text of "zZz" and text colour of "blue" for a blue circle`, ()=> {
            const svg = new SVG();
            const shape = new Circle();
            shape.setShapeColor(`blue`);
            svg.setShape(shape);
            svg.shapeTextAndColor(`ZZZ`, `blue`);
            expect(svg.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="115" font-size="50" text-anchor="middle" fill="blue">ZZZ</text></svg>`)
        })
    })
});