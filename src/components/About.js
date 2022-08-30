import React from 'react'
export default function About(props) {
  // const [myStyle, setmyStyle] = useState(
  //   {
  //     color:"white",backgroundColor : 'black'
  //   }
  // )
  let myStyle = {
    color: props.Mode === 'dark'?'white':'#042743',
    backgroundColor: props.Mode ==='dark'?'rgb(36 74 104)':'white',
    border:'1px solid',
    borderColor:props.Mode=== 'dark'?'white':'#042743'
}
  return (
    <>
    <div className="container"style={{ color: props.Mode === 'dark'?'white':'#042743'}} >
      <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne" >
      <button className="accordion-button"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze Your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
      </div>
    </div>
  </div>
  <div className="accordion-item"style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
      </div>
    </div>
  </div>
  <div className="accordion-item"style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
         It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. 
      </div>
    </div>
  </div>
</div>
{/* Temporary dark mode buttons created */}
{/* <div className="container">
<button type="button" onClick={ToggleStyle} className="btn btn-primary my-3 ">{btnText}</button>
</div> */}
    </div> 
   </>
  )
}
