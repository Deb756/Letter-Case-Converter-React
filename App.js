import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />

      <div className="container">
        <TextForm heading="Enter The Text To Annalize" />
      </div>
    </>
  );
}

export default App;
