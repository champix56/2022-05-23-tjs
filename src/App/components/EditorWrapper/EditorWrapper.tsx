import { MemeSVGViewer } from "orsys-tjs-meme";
import { IImage, IMeme } from "orsys-tjs-meme/dist/interfaces/common";
import React, { useEffect, useState } from "react";
import MemeForm from "../MemeForm/MemeForm";
import style from "./EditorWrapper.module.css";

//types
interface IEditorWrapperProps {meme:IMeme,onMemeChange:Function,images:Array<IImage>}

 
//component
const EditorWrapper: React.FC<IEditorWrapperProps> = (props) => {
  return (
    <div className={style.EditorWrapper} data-testid="EditorWrapper">
      <MemeSVGViewer
            meme={props.meme}
            image={undefined}
          />
          <MemeForm images={props.images}
            meme={props.meme}
            onMemeChange={props.onMemeChange}
          />
    </div>
  );
};

EditorWrapper.defaultProps = {};
export default EditorWrapper;
