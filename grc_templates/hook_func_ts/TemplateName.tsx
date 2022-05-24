import React, { useEffect, useState } from "react";
import style from "./TemplateName.module.css";

//types
interface ITemplateNameProps {}
interface ITemplateNameState {}
//etat initial
const initialState: ITemplateNameState = {};
//component
const TemplateName: React.FC<ITemplateNameProps> = (props) => {
  const [state, setstate] = useState(initialState);
  useEffect(() => {}, []);
  return (
    <div className={style.TemplateName} data-testid="TemplateName">
      TemplateName
    </div>
  );
};

TemplateName.defaultProps = {};
export default TemplateName;
