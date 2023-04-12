import React , {useState} from "react";

export default function TextForm(props) {
    
    const handleUpper = ()=>{
        setText(text.toUpperCase())
    }
    
    const handleLower = ()=>{
        setText(text.toLowerCase())
    }
    
    const handleClear = ()=>{
        setText("");
    }
    
    const handleChange = (event)=>{
        setText(event.target.value);
    }

    const handleCopy = ()=>{
      if(text === ''){
        alert("Write something to copy");
      }else{
        navigator.clipboard.writeText(text);
        alert("Copied to Clipboard");
      }
    }

    const[text , setText] = useState("Enter text here");

    
  return (
    <>
      <div className="text-main">
        <h1>Enter text to Analyze</h1>
        <textarea name="text" id="text" cols="100" rows="20" value={text} onChange={handleChange} style={{backgroundColor: props.mode === 'light'?'white':'#bfbfbf',color: props.mode === 'light'?'black':'black'}}></textarea>
        <div className="btns">
            <button className="btn" onClick={handleUpper}>Uppercase</button>
            <button className="btn" onClick={handleLower}>Lowercase</button>
            <button className="btn" onClick={handleClear}>Clear</button>
            <button className="btn" onClick={handleCopy}>Copy</button>
        </div>
        <div className="summary">
            <h2>Summary</h2>
            <p>Total Words: {text.split(" ").length}</p>
            <p>Total Characters: {text.length}</p>
        </div>
        <div className="summary">
            <h2>Preview</h2>
            <p>{text!==""?text:"No Text to Preview"}</p>
            {/* <p>{props.mode === 'light'?'Fuck':'You'}</p> */}
        </div>
      </div>
    </>
  );
}
