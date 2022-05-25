import { IImage, IMeme } from "orsys-tjs-meme/dist/interfaces/common";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ADR_REST, REST_RESSOURCES } from "../../config/config";
import { ACTIONS_CURRENT, emptyMeme, store } from "../../store/store";
import Button from "../Button/Button";
import style from "./MemeForm.module.css";

//types
interface IMemeFormProps {
  meme: IMeme;
  onMemeChange: Function;
  images: Array<IImage>;
}

const MemeForm: React.FC<IMemeFormProps> = (props) => {
  const resetMeme=()=>{props.onMemeChange(emptyMeme);}
  const saveMeme = () => {
    const prSave=fetch(`${ADR_REST}${REST_RESSOURCES.memes}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(props.meme),
    }).then(
      (f) => {
        console.log("save ok")//+obj.id);
        resetMeme();
        //store.dispatch({type:ACTIONS_CURRENT.CLEAR_MEME})
      },
      () => {
        console.log("save failed");
      }
    );
  };
  return (
    <div data-testid="MemeForm" className={style.MemeForm}>
      <form
        onSubmit={(evt: React.FormEvent<HTMLFormElement>) => {
          evt.preventDefault();
          saveMeme();
        }}
        onReset={(evt: React.FormEvent<HTMLFormElement>) => {
          resetMeme();
        }}
      >
        <h1>Titre</h1>
        <input
          type="text"
          id="f_titre"
          placeholder="saisir titre"
          value={props.meme.titre}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
            props.onMemeChange({ ...props.meme, titre: evt.target.value });
          }}
        />
        <hr />
        <h2>Image</h2>
        <select
          value={props.meme.imageId}
          onChange={(evt: React.ChangeEvent<HTMLSelectElement>) => {
            props.onMemeChange({
              ...props.meme,
              imageId: Number(evt.target.value),
            });
          }}
        >
          <option value="-1">Aucune</option>
          {props.images.map((img: IImage, position: number) => {
            return (
              <option value={img.id} key={"select-img-" + position}>
                {img.name}
              </option>
            );
          })}
        </select>
        <hr />
        <h2>text</h2>
        <input
          type="text"
          value={props.meme.text}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
            props.onMemeChange({ ...props.meme, text: evt.target.value });
          }}
        />
        <div className={style.half}>
          <div>
            <label htmlFor="f_x">x:</label>
            <br />
            <input
              type="number"
              className={style.smallInput}
              value={props.meme.x}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                props.onMemeChange({
                  ...props.meme,
                  x: parseInt(evt.target.value),
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="f_y">y:</label>
            <br />
            <input
              type="number"
              className={style.smallInput}
              value={props.meme.y}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                props.onMemeChange({
                  ...props.meme,
                  y: parseInt(evt.target.value),
                });
              }}
            />
          </div>
        </div>
        <hr />
        <label htmlFor="f_color">Couleur</label>
        <input
          type="color"
          id="f_color"
          value={props.meme.color}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
            props.onMemeChange({ ...props.meme, color: evt.target.value });
          }}
        />
        <div className={style.half}>
          <div>
            <label htmlFor="f_sz">font-size:</label>
            <br />
            <input
              type="number"
              className={style.smallInput}
              min={0}
              value={props.meme.fontSize}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                props.onMemeChange({
                  ...props.meme,
                  fontSize: Number(evt.target.value),
                });
              }}
            />
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
              value={props.meme.fontWeight}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                props.onMemeChange({
                  ...props.meme,
                  fontWeight: evt.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className={style.half}>
          <div>
            <label htmlFor="f_underline">underline:</label>
            <br />
            <input
              id="f_underline"
              type="checkbox"
              checked={props.meme.underline}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                props.onMemeChange({
                  ...props.meme,
                  underline: evt.target.checked,
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="f_italic">italic:</label>
            <br />
            <input
              id="f_italic"
              type="checkbox"
              checked={props.meme.italic}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                props.onMemeChange({
                  ...props.meme,
                  italic: evt.target.checked,
                });
              }}
            />
          </div>
        </div>
        <div className={style.half}>
          <Button type="reset" bgcolor="tomato">
            Reset
          </Button>
          <Button type="submit">save</Button>
        </div>
      </form>
    </div>
  );
};
export default MemeForm;
function mapStateToProps(storeState:IMeme,ownProps:any){
  return {
    ...ownProps,
    meme:storeState
  }
}
function mapDispatchToProps(dispatch:Function){
  return {
    onMemeChange:(meme:IMeme)=>{
      dispatch({type:ACTIONS_CURRENT.UPDATE_MEME,value:meme})
    }
  }
}
export const ConnectedMemeForm=connect(mapStateToProps,mapDispatchToProps)(MemeForm);