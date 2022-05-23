import React from "react";
import "./App.css";
import Button from "./components/Button/Button";

class App extends React.Component {
  constructor(props){
    super(props);
    // valeur initial du conteneur etatique
    this.state={counter:0,message:'aucun message'}
  }
  render() {
    return (
      <div className="App" style={{ textAlign: "center" }}>
        <div>Valeur de COUNTER : {this.state.counter}</div>
        <hr />
        <Button
          text="Ajouter 1"
          bgcolor="skyblue"
          onButtonClicked={() => {
            this.setState({counter:this.state.counter+1});
            console.log(this.state.counter);
          }}
        />
        <Button
          text="Soustraire 1"
          bgcolor="tomato"
          onButtonClicked={() => {
            this.setState({counter:this.state.counter-1});
            console.log(this.state.counter);
          }}
        />
      </div>
    );
  }
}
export default App;
