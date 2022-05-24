import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./Header.module.css";

const initialState = {};

const Header = (props) => {
  const [state, setstate] = useState(initialState);
  //effet mount/update
  useEffect(() => {}, [props]);
  return (
    <div className={style.Header} data-testid="Header">
      header
    </div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
