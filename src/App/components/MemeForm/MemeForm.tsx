import React, { useEffect, useState } from "react";
import style from "./MemeForm.module.css";

//types
interface IMemeFormProps {}
interface IMemeFormState {}
//etat initial
const initialState: IMemeFormState = {};
//component
const MemeForm: React.FC<IMemeFormProps> = (props) => {
  const [state, setstate] = useState(initialState);
  useEffect(() => {}, []);
  return (
    <div className={style.MemeForm} data-testid="MemeForm">
      MemeForm
    </div>
  );
};

MemeForm.defaultProps = {};
export default MemeForm;
