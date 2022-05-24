import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./FlexWide.module.css";

const FlexWide = (props) => {
  return (
    <div className={style.FlexWide} data-testid="FlexWide">
      {props.children}
    </div>
  );
};

FlexWide.propTypes = {
  children:PropTypes.any.isRequired,
};

FlexWide.defaultProps = {};

export default FlexWide;
