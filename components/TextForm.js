import React, { useState } from "react";
//here by above type we can use the (State) of React

export default function TextForm(props) {
  //uppercase
  const handleUpClick = () => {
    let textUpper = text.toUpperCase();
    setText(textUpper);
  };

  //lowercase
  const handleLwClick = () => {
    let textLower = text.toLowerCase();
    setText(textLower);
  };

  //making first latter capitalize
  function capitalizeFLetter() {
    let word = text.split(/\s+/);

    let capWord = word.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    let newWord = capWord.join(" ");
    setText(newWord);
  }

  //copy text from text area
  function copyText() {
    // Get the textarea element
    var textarea = document.getElementById("exampleFormControlTextarea1");

    // Select the text
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text
    document.execCommand("copy");

    // Optionally, you can alert the user that the text has been copied
    alert("Text copied to clipboard");
  }

  //handle event
  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here State");

  return (
    <div>
      <h1>{props.heading}</h1>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnchange}
        ></textarea>
      </div>
      <button className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary my-3 mx-3" onClick={handleLwClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary my-3 mx-3" onClick={capitalizeFLetter}>
        Convert to Cap First latter
      </button>
      <button className="btn btn-primary my-3 mx-3" onClick={copyText}>
        Copy Text
      </button>
    </div>
  );
}
