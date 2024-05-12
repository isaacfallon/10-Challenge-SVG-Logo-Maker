// Class for the SVG code to export into the 'index.js' file

class SVG {
    constructor() {
        this.textInput = ``;
        this.shapeType = ``;
    }
    shapeTextAndColor(text, color) {
        this.textInput = `<text x="150" y="115" font-size="50" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shape) {
        this.shapeType = shape.render();
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeType}${this.textInput}</svg>`;
    }
}

module.exports = SVG;