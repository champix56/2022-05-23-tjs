import React from "react";
import style from './Button.module.css'
// contenu du cmp
function Button(props) {
  console.warn(props,style);
  return (
    <button className={style.Button}
      onClick={(evt) => {
        props.onButtonClicked()
      }}
      style={{
          backgroundColor:props.bgcolor
      }}
    >
      {props.text}
    </button>
  );
}

//exportation
export default Button;
