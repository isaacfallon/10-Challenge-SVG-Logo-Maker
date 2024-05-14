// Class for the SVG code to export into the 'index.js' file

// We create a constructor class for 'SVG' for us to add the main bulk of our SVG code which will create our SVG logo. 
class SVG {
    constructor() {
        // Set a textInput and shapeType property to empty strings.
        this.textInput = ``;
        this.shapeType = ``;
    }
    // We create a method 'shapeTextAndColor' with two parameters: 'text' and 'color'
    shapeTextAndColor(text, color) {
        // We check to see if the shape text is greater than 3. If it is, throw an error. 
        // Otherwise, set the SVG code to our 'color' and 'text' parameters (which will be set via the inquirer prompts on the 'index.js' file).
        if (text.length > 3) {
            throw new Error(`Please enter text with 3 or less characters`);
        }
        this.textInputs = `<text x="150" y="115" font-size="50" text-anchor="middle" fill="${color}">${text}</text>`
    }
    // A method of 'setShape' is created to take in a 'shape' parameter (which will be set via the inquirer prompts on the 'index.js' file).
    setShape(shape) {
        // The shape type variable within the context of this constructor class is set to the specific shape called with the render method. 
        this.shapeType = shape.render();
    }
    // The 'render' method we set here then creates the actual SVG code that will create the shape, text, text colour and shape colour.
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeType}${this.textInputs}</svg>`;
    }
}

// Export this SVG class to be used elsewhere. 
module.exports = SVG;