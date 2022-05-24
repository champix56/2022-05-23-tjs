import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./Navbar.module.css";

const initialState = {};

const Navbar = (props) => {
  const [state, setstate] = useState(initialState);
  //effet mount/update
  useEffect(() => {}, [props]);
  return (
    <div className={style.Navbar} data-testid="Navbar">
      navbar
    </div>
  );
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
