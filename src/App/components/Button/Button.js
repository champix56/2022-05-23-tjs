import React from "react";
import './Button.css'
// contenu du cmp
function Button(props) {
  console.warn(props);
  return (
    <button className="Button"
      onClick={(evt) => {
        props.onButtonClicked()
      }}
    >
      {props.text}
    </button>
  );
}

//exportation
export default Button;
