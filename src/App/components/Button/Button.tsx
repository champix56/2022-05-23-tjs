import React, { ReactNode, useEffect, useState } from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";
import { IButtonProps } from "./Button.interface";

// contenu du cmp
const Button:React.FC<IButtonProps> = (props) => {
  const [isClicked, setisClicked] = useState(false);
  useEffect(() => {
    if (isClicked === true) {
      setTimeout(() => setisClicked(false), 300);
    }
  }, [isClicked]);
  return (
    <button
      className={style.Button + (isClicked ? " " + style.clicked : "")}
      onClick={(evt) => {
        setisClicked(true);
        if (
          undefined !== props.onButtonClicked &&
          typeof props.onButtonClicked === "function"
        )
          props.onButtonClicked();
      }}
      style={{
   
        backgroundColor: props.bgcolor,
        color: props.color,     
        ...props.styleDuButton,
      }}
      type={props.type}
    >
      {props.children}
    </button>
  );
};
/*
Button.propTypes = {
  bgcolor: PropTypes.string.isRequired,
  styleDuButton: PropTypes.object,
  color: PropTypes.string.isRequired,
  onButtonClicked: PropTypes.func,
  children: PropTypes.any.isRequired,
};*/
Button.defaultProps = {
  bgcolor: "skyblue",
  color: "white",
  type: "button",
};
//exportation
export default Button;
