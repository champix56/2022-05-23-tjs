import React from "react";
import "./App.css";
import Button from "./components/Button/Button";

class App extends React.Component {
  counter = 0;
  render() {
    return (
      <div className="App" style={{ textAlign: "center" }}>
        <div>Valeur de COUNTER : {this.counter}</div>
        <hr />
        <Button
          text="Ajouter 1"
          bgcolor="skyblue"
          onButtonClicked={() => {
            this.counter++;
            console.log(this.counter);
          }}
        />
        <Button
          text="Soustraire 1"
          bgcolor="tomato"
          onButtonClicked={() => {
            this.counter--;
            console.log(this.counter);
          }}
        />
      </div>
    );
  }
}
export default App;
