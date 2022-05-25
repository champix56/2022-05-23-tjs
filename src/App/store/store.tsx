import { IMeme } from "orsys-tjs-meme/dist/interfaces/common";

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
) {
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
