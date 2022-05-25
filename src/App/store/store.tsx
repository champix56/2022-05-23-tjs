import { IMeme } from "orsys-tjs-meme/dist/interfaces/common";
import { createStore } from "redux";

export const emptyMeme: IMeme = {
  color: "#000000",
  titre: "",
  text: "",
  x: 0,
  y: 20,
  fontSize: 20,
  fontWeight: "500",
  imageId: 0,
  italic: false,
  underline: false,
};
export const ACTIONS_CURRENT = Object.freeze({
  CLEAR_MEME: "CLEAR_MEME",
  SAVE_MEME: "SAVE_MEME",
  UPDATE_MEME: "UPDATE_MEME",
});
function currentReducer(
  state: IMeme = emptyMeme,
  action: { type: string; value?: object }
):IMeme {
    console.log(action.type)
  switch (action.type) {
    case ACTIONS_CURRENT.CLEAR_MEME:
      return { ...emptyMeme };
    case ACTIONS_CURRENT.UPDATE_MEME:
      return { ...state, ...action.value };
    case ACTIONS_CURRENT.SAVE_MEME:
      return state;
    default:
      return state;
  }
}
export const store=createStore(currentReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    );
store.subscribe(()=>{
    console.trace(store.getState())
})
/*
store.dispatch({type:ACTIONS_CURRENT.UPDATE_MEME,value:{italic:true,underline:true},})
store.dispatch({type:ACTIONS_CURRENT.UPDATE_MEME,value:{text:'hello de lu'},})
store.dispatch({type:ACTIONS_CURRENT.UPDATE_MEME,value:{fontSize:45},})
store.dispatch({type:ACTIONS_CURRENT.CLEAR_MEME})
*/