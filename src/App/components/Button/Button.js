import React from "react";
import style from './Button.module.css'
// contenu du cmp
function Button(props) {
  console.warn(props);
  return (
    <button className={style.Button}
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
