import React, {useState} from "react";

export default function Textform(props) {
const handleUpClick =()=>{
  let newText = text.toUpperCase();
  // console.log("Uppercase was clicked " + text);
    setText(newText);
    props.showAlert("converted to uppercase!", "success");
}

const handleLoClick =()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!", "success");
}
const handleClearClick =()=>{
  let newText = ' ';
  setText(newText);
  props.showAlert("Screen is clear", "success");
}
const handleCopy =()=>{
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copy to Clipboard !", "success");
}

const handleExtraSpaces = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra spaces removed", "success");
}
 
// const handlecapitalize = ()=>{
//   let toLowerCase;
//   const lower = toLowerCase();
//   return lower.charAt(0).toUpperCase() + lower.slice(1);
// }

const hanndleOnChange =(event)=>{
    // console.log("On change");
    setText(event.target.value);

}

const [text, setText] = useState('');
    // text = "new text";        wrong way to change the state
    // setText("new text");    Correct way to change the state
  return (
    <>

    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1 >{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={hanndleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text </button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>CopyText</button>
      {/* <button className="btn btn-primary mx-2" onClick={handlecapitalize}>Capitalize First Word</button> */}
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
    
    
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview it here " }</p>
    </div>
    </>
  );
}
