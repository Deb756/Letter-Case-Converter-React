import "./App.css";
import Navbar from "./ComponentsCWH/Navbar";
import TextForm from "./ComponentsCWH/TextForm";

function App() {
  return (
    // Here the below is a jsx fragment which we used to add html,css,js in react
    <>
      {/* here bellow m passing (props) through title="TextUtils" bcz i wanna change some properties it dynamically */}
      <Navbar title="TextUtils" />
      {/* <Navbar  /> */}
      <div className="container">
        <TextForm heading="Enter The Text To Annalize" />
      </div>
    </>
  );
}

export default App;
