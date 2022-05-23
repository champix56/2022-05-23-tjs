import React from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";
// contenu du cmp
function Button(props) {
  console.warn(props, style);
  return (
    <button
      className={style.Button}
      onClick={(evt) => {
        if (
          undefined !== props.onButtonClicked &&
          typeof props.onButtonClicked === "function"
        )
          props.onButtonClicked();
      }}
      style={{
        ...props.styleDuButton,
        backgroundColor: props.bgcolor,
        color: props.color,
      }}
      type={props.type}
    >
      {props.text}
    </button>
  );
}
Button.propTypes = {
  bgcolor: PropTypes.string.isRequired,
  styleDuButton: PropTypes.object,
  color: PropTypes.string.isRequired,
  onButtonClicked: PropTypes.func,
  type: PropTypes.string.isRequired,
};
Button.defaultProps = {
  bgcolor: "skyblue",
  color: "white",
  type: "button",
};
//exportation
export default Button;
