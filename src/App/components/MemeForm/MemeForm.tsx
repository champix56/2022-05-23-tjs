import React from "react";
import style from "./MemeForm.module.css";

//types
interface IMemeFormProps {}
interface IMemeFormState {}
//etat initial
const initialState: IMemeFormState = {};
const MemeForm: React.FC<IMemeFormProps> = (props) => {
  return (
    <div data-testid="MemeForm" className={style.MemeForm}>
      <form>
        <h1>Titre</h1>
        <input type="text" id="f_titre" placeholder="saisir titre" />
        <hr />
        <h2>Image</h2>
        <select>
          <option value="-1">Aucune</option>
        </select>
        <hr />
        <h2>text</h2>
        <input type="text" />
        <div className={style.half}>
          <div>
            <label htmlFor="f_x">x:</label>
            <br />
            <input type="number" className={style.smallInput} />
          </div>
          <div>
            <label htmlFor="f_y">y:</label>
            <br />
            <input type="number" className={style.smallInput} />
          </div>
        </div>
        <hr />
        <label htmlFor="f_color">Couleur</label>
        <input type="color" id="f_color" />
        <div className={style.half}>
          <div>
            <label htmlFor="f_sz">font-size:</label>
            <br />
            <input type="number" className={style.smallInput} min={0} />
          </div>
          <div>
            <label htmlFor="f_fw">font-weight:</label>
            <br />
            <input
              type="number"
              className={style.smallInput}
              min="100"
              step="100"
              max="900"
            />
          </div>
        </div>
        <div className={style.half}>
          <div>
            <label htmlFor="f_underline">underline:</label>
            <br />
            <input id="f_underline" type="checkbox" />
          </div>
          <div>
            <label htmlFor="f_italic">italic:</label>
            <br />
            <input id="f_italic" type="checkbox" />
          </div>
        </div>
        <div className={style.half}></div>
      </form>
    </div>
  );
};
export default MemeForm;
