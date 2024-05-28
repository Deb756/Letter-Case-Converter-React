import { useState } from "react";
import "./App.css";
import Navbar from "./ComponentsCWH/Navbar";
import TextForm from "./ComponentsCWH/TextForm";

function App() {

  // Makeing a state for toggle dark light mode
  const[mode,setMode] = useState('light');

  // creating toggleMode
  const toggleMode = () =>{
    if(mode === 'light')
      {
        setMode('dark');
        // document.body.style.backgroundColor = '#212529'
        document.body.style.backgroundColor = '#141619'
      }
      else
      {
        setMode('light');
        document.body.style.backgroundColor = 'white'
      }
  }


  return (
    // Here the below is a jsx fragment which we used to add html,css,js in react
    <>
      {/* here bellow m passing (props) through title="TextUtils" bcz i wanna change some properties it dynamically */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar  /> */}
      <div className="container">
        <TextForm heading="Enter The Text To Annalize" mode={mode} toggleMode={toggleMode} />
      </div>
    </>
  );
}

export default App;
