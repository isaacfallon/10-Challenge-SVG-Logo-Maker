// Classes for the SVG shapes to export into the 'index.js' file

// We create a Shape constructor class we can use as a parent. 
class Shape {
    constructor() {
        // Set a colour property to an empty string. 
        // (Please note: I use the American spelling for 'colour' as 'color' when used in actual code as to unify the codebase when using 'color' based commands.)
        this.color = "";
    }
    // The method 'setShapeColor' is created to take in the color and set property of color within the context of the Shape parent. 
    setShapeColor(color) {
        this.color = color;
    }
}

// A constructor class of 'Circle' is created which inherits the color property of 'Shape' 
class Circle extends Shape {
    // We create a render function to return the actual SVG code that makes up a circle shape. 
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

// A constructor class of 'Square' is created which inherits the color property of 'Shape' 
class Square extends Shape {
    // We create a render function to return the actual SVG code that makes up a square shape.
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}

// A constructor class of 'Triangle' is created which inherits the color property of 'Shape' 
class Triangle extends Shape {
    render() {
        // We create a render function to return the actual SVG code that makes up a triangle shape.
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

// The destructured classes of 'Circle' 'Square' and 'Triangle' are exported to use in our index.js file.
module.exports = { Circle, Square, Triangle }