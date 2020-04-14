import React, { Component } from 'react';
import p5 from 'p5';
class P5Canvas extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }
    sketch = (p) => {
        p.newImage = null
        p.setup = () => {
            this.can = p.createCanvas(500, 500);
            p.background(0)
            this.clear = p.createButton("clear");
            this.clear.mousePressed(() => p.background(0))
            this.can.drop(p.gotFile)
        }
        p.draw = () => {
            if (p.mouseIsPressed) {
                p.stroke(255);
                p.strokeWeight(10)
                p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
            }
            if (p.newImage){
                p.image(p.newImage, 0, 0, p.width * .2, p.height *.2);
            }
        }
        p.gotFile = (file) => {
            console.log(file);
            switch (file.type) {
                case "audio":
                    console.log("this is an audio file")
                    break;
                case "image":
                   p.newImage = p.createImg(file.data,"").hide();
                    break;
                default:
                    console.log("I dont know what this file is?")
                    break;
            }
        }
        // we attach our own function to our P5 instance 'p'
        p.myClear = () => { p.background(155) }
    }
    componentDidMount() {
        this.myP5 = new p5(this.sketch, this.canvasRef.current)
        this.testX = 5555;
    }
    // We can call our own function in our p5 code through our instance P5 'myP5'
    // If we want to call any of our own p5 functions from outside our 'sketch' function,
    // (as for examply calling p.myClear from our button below), we have call it from
    // another class function.
    // We do this because if we try to attach to our button onClick={this.myP5.myClear}
    // This will not work and we will get an error because 'this.myP5.myClear' only exists
    // after 'componentDidMount' and does not exist at the time of first render when it is bound
    // to the buttons onClick.
    render() {
        return (
            <>
                <div ref={this.canvasRef} style={{ marginTop: "50px" }}>
                </div>
            </>
        )
    }
}
export default P5Canvas