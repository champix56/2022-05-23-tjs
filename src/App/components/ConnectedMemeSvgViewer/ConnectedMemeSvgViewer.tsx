import { MemeSVGViewer } from "orsys-tjs-meme";
import { connect } from "react-redux";
import { IStoreState } from "../../store/store";

function mstp(s: IStoreState, p: any) {
  return {
    ...p,
    meme: s.current,
    image: s.ressources.images.find((img) => img.id === s.current.imageId),
  };
}
function mdtp(d:Function){return{}}
export default connect(mstp,mdtp)(MemeSVGViewer)