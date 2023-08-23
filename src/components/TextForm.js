import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("You clicked Uppercase" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");

  };
  const handleItClick = () => {
    let newText = <i>{text}</i>;
    setText(newText);
    props.showAlert("Converted to italic!","success");

  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  
  const [text, setText] = useState("");

  return (
    <>
      <div className ="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className ="mb-3">
          <textarea className ="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="15"></textarea>
        </div>
        <button className ="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className ="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className ="btn btn-primary mx-2" onClick={handleItClick}>
          Convert to Italic
        </button>
      </div>
      <div className ="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Text Summary</h1>
        <p>
          {(text.split(" ").length)} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:("Enter something in above textbox to see it here")}</p>
      </div>
    </>
  );
}
