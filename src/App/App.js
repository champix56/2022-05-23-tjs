import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
function App() {
  return (
    <div className="App">
      DEMAT BREIZH
      <br />
      <Button
        text="Hello"
        onButtonClicked={() => {
          console.log();
        }}
      />
      <Button text="Button value" />
      <Button text="Click ici" />
      <Button />
    </div>
  );
}

export default App;
