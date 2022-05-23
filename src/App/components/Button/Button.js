import React from "react";

// contenu du cmp
function Button(props) {
  console.warn(props);
  return (
    <button
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
