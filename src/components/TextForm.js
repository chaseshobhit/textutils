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
    let newText = <strong>{text}</strong>;
    setText(newText);
    props.showAlert("Converted to italic!","success");

  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handleClClick = () => {
    let newText = ("");
    setText(newText);
    props.showAlert("Text cleared","success");
  };

  const handleCopy = ()=>{
    console.log('I am copy');
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard","success");
  }
  
  const handleExtraSpaces= ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extraspaces removed","success");
  }
  const [text, setText] = useState("");

  return (
    <>
      <div className ="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className ="mb-3">
          <textarea className ="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="15"></textarea>
        </div>
        <button disabled={text.length===0} className ="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className ="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className ="btn btn-primary mx-2 my-2" onClick={handleItClick}>
          Convert to Italic
        </button>
        <button disabled={text.length===0} className ="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className ="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
          Remove Extraspaces
        </button>
        <button disabled={text.length===0} className ="btn btn-primary mx-2 my-2" onClick={handleClClick}>
          Clear Text
        </button>
      </div>
      <div className ="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Text Summary</h1>
        <p>
          {(text.split(" ").filter((element)=>{return element.length!==0}).length)} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:("Nothing to preview")}</p>
      </div>
    </>
  );
}
