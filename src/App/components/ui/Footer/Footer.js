import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./Footer.module.css";

const initialState = {};

const Footer = (props) => {
  const [state, setstate] = useState(initialState);
  //effet mount/update
  useEffect(() => {}, [props]);
  return (
    <div className={style.Footer} data-testid="Footer">
      footer
    </div>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
