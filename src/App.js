import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from'./components/TextForm'
import About from "./components/About";
import Alert from "./components/Alert";
// let name = "Shobhit";

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(()=>{
      // document.title='TextUtils is Amazing';
      // },2000)
      // setInterval(()=>{
      //   document.title='TextUtils - Download Now';
      //   },1500)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils- Light Mode";
    }
  };

  const toggleMode1 = () => {
    if (mode === "light") {
      setMode("red");
      document.body.style.backgroundColor = "#7d1212";
      showAlert("Red mode has been Enabled", "success");
      document.title = "TextUtils- Red Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils2"
          aboutText="TextAbouts"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
