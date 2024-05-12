const { Circle, Square, Triangle } = require(`./shapes`);

describe(`Shape testing suite`, ()=> {
    describe(`Circle test`, ()=> {
        it(`The circle shape as the colour 'blue' should render to screen`, ()=> {
            const shape = new Circle();
            shape.setShapeColor(`blue`);
            expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`)
        })
    })
    describe(`Square test`, ()=> {
        it(`The square shape as the colour 'blue' should render to screen`, ()=> {
            const shape = new Square();
            shape.setShapeColor(`blue`);
            expect(shape.render()).toEqual(`<rect x="90" y="40" width="120" height="120" fill="blue" />`)
        })
    })
    describe(`Triangle test`, ()=> {
        it(`The triangle shape as the colour 'blue' should render to screen`, ()=> {
            const shape = new Triangle();
            shape.setShapeColor(`blue`);
            expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`)
        })
    })
});