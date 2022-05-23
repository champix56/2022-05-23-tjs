import React from 'react';
import './App.css';
import Button from './components/Button/Button'
function App() {
  return (
    <div className="App">
     DEMAT BREIZH<br/>
     <Button text="Hello" color="blue"/>
     <Button text="Button value"/>
     <Button text="Click ici"/>
     <Button/>
     <Button/>
     <Button/>
    </div>
  );
}

export default App;
