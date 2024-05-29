import React, { useState } from "react";
//here by above type we can use the (State) of React

export default function TextForm(props) {
  //uppercase
  const handleUpClick = () => {
    // console.log("UpperCase was Clicked " + text);
    let textUpper = text.toUpperCase();
    setText(textUpper);
    props.showAlert("UpperCase Converted","success");
  };

  //lowercase
  const handleLwClick = () => {
    // console.log("UpperCase was Clicked " + text);
    let textLower = text.toLowerCase();
    setText(textLower);
    props.showAlert("LowerCase Converted","success");
  };

  //making first latter capitalize
  function capitalizeFLetter() {
    let word = text.split(/\s+/);

    let capWord = word.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    let newWord = capWord.join(" ");
    setText(newWord);
    props.showAlert("Cap First latter Converted","success");
  }

  //Capitalize Sentence here
  function capitalizeSentences() {
    // Split the text into an array of sentences
    var sentences = text.split(". ");

    // Capitalize the first letter of each sentence
    for (var i = 0; i < sentences.length; i++) {
      // Trim any leading or trailing whitespace
      sentences[i] = sentences[i].trim();

      // Capitalize the first letter of the sentence
      sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1);
    }

    // Join the sentences back together
    let cap = sentences.join(". ");
    setText(cap);
    props.showAlert("Sentence First Charector Capitalized","success");
  }

  //Remove extraSpaces function
  //here we used javaScript (Rejex)
  const removeExSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Sentence Extra Spaces Removed","success");
  }



  //Copy text from text area
  function copyText() {
    // Get the textarea element
    var textarea = document.getElementById("exampleFormControlTextarea1");

    // Select the text
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text
    document.execCommand("copy");
    props.showAlert("Text Copied To Clipboard","success");

    // Optionally, you can alert the user that the text has been copied
    // alert("Text copied to clipboard");
//     <div class="alert alert-primary" role="alert">
//   Text copied to clipboard
// </div>
  }

  //clear Function of TextArea
  function clearText() {
    var textarea = document.getElementById("exampleFormControlTextarea1");
    let clrTxt = (textarea.value = "");
    setText(clrTxt);
    props.showAlert("Board Cleard","success");
  }

  //handle events on textarea
  const handleOnchange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };


  //cwhClass-10
  //Adding myStyles
  //its a Js object so the value will be in strings
  // let myStyle = {
  //   color:'black',
  //   backgroundColor:'white'
  // }

  //by using react state change color
  // const[myStyle,setMyStyle] = useState({
  //   color:'black',
  //   backgroundColor:'white'
  // })
  //here after that i can change the color by taking a button and using the (state) there and onclick my state will cahnge according to my input of the state
  



  //here like bellow we can rander (State)
  const [text, setText] = useState("Enter text here State");
  //text = "new text" // wrong way to change the state
  // setText("new text") // right way to change the state
  return (
    <>
      {/* <div className="container" style={myStyle}> */}
      <div className="container">
        <h1 className={`my-3 text-${props.mode === 'light'? 'dark':'light'}`}>{props.heading}</h1>
        <div className="">
          <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.mode === 'light'? 'dark':'light'}`}>
            Example textarea
          </label>
          <textarea
            className="form-control "
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnchange}
          ></textarea>
        </div>
        <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleLwClick}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary my-3 mx-1"
          onClick={capitalizeFLetter}
        >
          Convert to Cap First latter
        </button>
        <button
          className="btn btn-primary my-3 mx-1"
          onClick={capitalizeSentences}
        >
          Capitalize Sentence
        </button>
        <button
          className="btn btn-primary my-3 mx-1"
          onClick={removeExSpaces}
        >
          Remove ExtraSpaces
        </button>
        <button className="btn btn-primary my-3 mx-1" onClick={copyText}>
          Copy Text
        </button>
        <button className="btn btn-primary my-3 mx-1" onClick={clearText}>
          Clear All
        </button>
      </div>
      <div className="mx-2">
        <div className="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-1 m-2">
          <h3>
            <u>Word Count / Charecter Count</u>
          </h3>
          <p>
            <b>{text.length}</b> Charecter and <b>{text.split(" ").length}</b>{" "}
            Words
            <br />
              It will take <b>{0.008 * text.split(" ").length}</b> Minutes to
              read the whole paragraph
          </p>
        </div>
        <div className="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-1 m-2">
          <h3 className="">
            <u>Your Text Preview</u>
          </h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
