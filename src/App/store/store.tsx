import { IImage, IMeme } from "orsys-tjs-meme/dist/interfaces/common";
import { combineReducers, createStore } from "redux";
import { ADR_REST, REST_RESSOURCES } from "../config/config";

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
): IMeme {
  console.log(action.type);
  switch (action.type) {
    case "ADD_MEME":
    case ACTIONS_CURRENT.CLEAR_MEME:
      return { ...emptyMeme };
    case ACTIONS_CURRENT.UPDATE_MEME:
      return { ...state, ...action.value };
    case ACTIONS_CURRENT.SAVE_MEME:
      fetch(
        `${ADR_REST}${REST_RESSOURCES.memes}${
          undefined !== state.id ? "/" + state.id : ""
        }`,
        {
          method: undefined !== state.id ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(state),
        }
      )
        .then((f) => {
          return f.json();
        })
        .then((o) => {
          if (undefined === o.id) {
            //   reponse failed
            console.log("save failed");

            return;
          } else {
            console.log("save ok");
            store.dispatch({ type: "ADD_MEME", value: o });
            //traitement de reponse OK
          }
        });
      return state;
    default:
      return state;
  }
}

const ressourcesInitialState = {
  memes: [],
  images: [],
};

const ressourcesReducer = (
  state = ressourcesInitialState,
  action: {
    type: string;
    value?: IMeme | IImage;
    values?: Array<IMeme | IImage>;
    arr_values?: [Array<IImage>, Array<IMeme>];
  }
) => {
  switch (action.type) {
    case "@@INIT":
      const pimg = fetch(`${ADR_REST}${REST_RESSOURCES.images}`, {
        method: "GET",
        headers: { Accept: "application/json" },
      }).then((f) => f.json());
      const pmeme = fetch(`${ADR_REST}${REST_RESSOURCES.memes}`, {
        method: "GET",
        headers: { Accept: "application/json" },
      }).then((f) => f.json());

      Promise.all([pimg, pmeme]).then((arr_arr) => {
        store.dispatch({ type: "INIT_VALUES", arr_values: arr_arr });
      });

      return state;
    case "INIT_VALUES":
      if (undefined !== action.arr_values) {
        return { images: action.arr_values[0], memes: action.arr_values[1] };
      } else return state;

    case "ADD_MEME":
      const positionMeme = state.memes.findIndex(
        (meme: IMeme) => meme.id === action.value?.id
      );
      if (positionMeme === -1) {
        //nouveau meme car pas trouver l'id dans la liste de memes
        return { ...state, memes: [...state.memes, action.value] };
      } else {
        return {
          ...state,
          memes: [
            ...state.memes.slice(0, positionMeme),
            action.value,
            ...state.memes.slice(positionMeme + 1),
          ],
        };
      }
    default:
      return state;
  }
};
export interface IStoreState {
  ressources: {
    images: Array<IImage>;
    memes: Array<IMeme>;
  };
  current: IMeme;
}

const combinedReducers = combineReducers({
  ressources: ressourcesReducer,
  current: currentReducer,
});
export const store = createStore(
  combinedReducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
  console.trace(store.getState());
});
/*
store.dispatch({type:ACTIONS_CURRENT.UPDATE_MEME,value:{italic:true,underline:true},})
store.dispatch({type:ACTIONS_CURRENT.UPDATE_MEME,value:{text:'hello de lu'},})
store.dispatch({type:ACTIONS_CURRENT.UPDATE_MEME,value:{fontSize:45},})
store.dispatch({type:ACTIONS_CURRENT.CLEAR_MEME})
*/
