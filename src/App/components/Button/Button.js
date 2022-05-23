import React, { useEffect, useState } from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";
// contenu du cmp
function Button(props) {
  const [isClicked, setisClicked] = useState(false);
  useEffect(() => {
    if(isClicked===true){setTimeout(()=>setisClicked(false),300)}
  }, [isClicked])
  return (
    <button
      className={style.Button+(isClicked?' '+style.clicked:'')}
      onClick={(evt) => {
          setisClicked(true);
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
      {props.children}
    </button>
  );
}
Button.propTypes = {
  bgcolor: PropTypes.string.isRequired,
  styleDuButton: PropTypes.object,
  color: PropTypes.string.isRequired,
  onButtonClicked: PropTypes.func,
  type: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
Button.defaultProps = {
  bgcolor: "skyblue",
  color: "white",
  type: "button",
};
//exportation
export default Button;
