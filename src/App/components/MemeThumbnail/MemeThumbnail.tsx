import { MemeSVGViewer } from "orsys-tjs-meme";
import { IImage, IMeme } from "orsys-tjs-meme/dist/interfaces/common";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { IStoreState } from "../../store/store";
import style from "./MemeThumbnail.module.css";

//types
interface IMemeThumbnailProps {
  images: Array<IImage>;
  memes: Array<IMeme>;
}

//component
const MemeThumbnail: React.FC<IMemeThumbnailProps> = (props) => {
  console.log(props);
  return (
    <div className={style.MemeThumbnail} data-testid="MemeThumbnail">
      {props.memes.map((meme: IMeme, i: number) => (
        <Link to={"/editor/" + meme.id} key={"thumb" + i}>
          <div className={style.vignette}>
            <MemeSVGViewer
              meme={meme}
              image={props.images.find((img) => img.id === meme.imageId)}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};
function mstp(s: IStoreState, p: any) {
  return { ...p, ...s.ressources };
}
function mdtp() {
  return {};
}
export default connect(mstp, mdtp)(MemeThumbnail);
