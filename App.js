import { useState } from "react";
import "./App.css";
import Navbar from "./ComponentsCWH/Navbar";
import TextForm from "./ComponentsCWH/TextForm";
import Alert from "./ComponentsCWH/Alert";

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
        //used alert here
        showAlert("Dark mode Enabled","success")
      }
      else
      {
        setMode('light');
        document.body.style.backgroundColor = 'white'
        showAlert("Light mode Enabled","success")
      }
  }

  //alert state
  const[alert,setAlert] = useState(null);

  //setting alert
  const showAlert = (massage,type) =>{
    setAlert({
      msg:massage,
      type:type
    })
    //determining how long alert will show
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    // Here the below is a jsx fragment which we used to add html,css,js in react
    <>
      {/* here bellow m passing (props) through title="TextUtils" bcz i wanna change some properties it dynamically */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      {/* <Navbar  /> */}
      <div className="container">
        <TextForm heading="Enter The Text To Annalize" mode={mode} showAlert={showAlert} toggleMode={toggleMode} />
      </div>
    </>
  );
}

export default App;
