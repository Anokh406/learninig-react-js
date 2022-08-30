import React, {useState} from 'react'

export default function TextForm(props) {
  const handleOnChange =(event)=>{
    setText(event.target.value);
  };
  const handleUppercase =()=>{
   let newText=Text.toUpperCase();
   setText(newText);
   props.showAlert("Converted into Upper case","success");
  };
  const handleLowercase =()=>{
   let newText=Text.toLocaleLowerCase();
   setText(newText);
   props.showAlert("Converted into LOwer case","success");
  };
  const handleRemoveSpace =()=>{
   let newText=Text.replace(/\s+/g,' ').trim();
   setText(newText);
   props.showAlert("Remove extra space","success");
  };
  const handleCopy =(event)=>{
 
    console.log('i am copy');
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
   props.showAlert("Text copy into clipboard","success");
  };
  const handleClrcase =()=>{
   let newText="";
   setText(newText);
   props.showAlert("Clear","success");
  };
  const [Text, setText] = useState("");
  return (
    <>
     
    <div className="container my-3"style={{color:props.Mode==='dark'? 'white':'#042743'}}>
      <div className="form-group">
                  <h1 className='my-3 mx-2'>{props.heading}</h1>
    <textarea className="form-control" value={Text} style={{backgroundColor:props.Mode==='dark'? '#13466e':'white',color:props.Mode==='dark'? 'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div>
  <button disabled={Text.length===0} className="btn btn-primary my-3 mx-2 my-1" onClick={handleUppercase} >Convert to upper case</button>
  <button disabled={Text.length===0} className="btn btn-primary my-3 mx-2 my-1" onClick={handleLowercase} >Convert to lower case</button>
  <button disabled={Text.length===0} className="btn btn-primary my-3 mx-2 my-1" onClick={handleClrcase} >Clear</button>
  <button disabled={Text.length===0} className="btn btn-primary my-3 mx-2 my-1" onClick={handleRemoveSpace} >Remove space</button>
  <button disabled={Text.length===0} className="btn btn-primary my-3 mx-2 my-1" onClick={handleCopy} >Copy Text</button>
      </div>
      <div className="container"style={{color:props.Mode==='dark'? 'white':'#042743'}}>
        <h1>Your text summary :-</h1>
        <p>{Text.split(" ").filter((element)=>{return element.length!==0}).length} words And {Text.length} characters</p>
        <p>{0.008*Text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>{Text.length>0 ?Text:'Nothing To Preview!'}</h2>
        <p>{Text}</p>
      </div>
  </>
  )
}
