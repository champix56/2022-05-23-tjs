import React, { useEffect } from "react";
import "./App.css";
import FlexWide from "./components/layout/FlexWide/FlexWide";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";
import MemeThumbnail from "./components/MemeThumbnail/MemeThumbnail";
import ConnectedMemeSvgViewer from "./components/ConnectedMemeSvgViewer/ConnectedMemeSvgViewer";
import { ConnectedMemeForm } from "./components/MemeForm/MemeForm";
import { ConnectedModal } from "./components/Modal/Modal";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import { emptyMeme, IStoreState, store } from "./store/store";
import { connect } from "react-redux";
import { IMeme } from "orsys-tjs-meme/dist/interfaces/common";
import ThumbnailPDF from "./components/PDF/ThumbnailPDF/ThumbnailPDF";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <div className="App" style={{ textAlign: "center" }}>
          <Header />
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <h1>Bienvenu sur l'app</h1>
            </Route>
            <Route path="/editor" exact>
              <EditorConstructionWithRouter />
            </Route>
            <Route path="/editor/:id">
              <EditorConstructionWithRouter />
            </Route>
            <Route path="/thumbnailPDF">
              <ThumbnailPDF/>
            </Route>
            <Route path="/thumbnail">
              <MemeThumbnail />
            </Route>
            <Route path="/">
              <h1>Route non disponible</h1>
            </Route>
          </Switch>

          <Footer>Desorbaix &amp; Orsys &copy; 2022</Footer>
        </div>
        <ConnectedModal />
      </>
    );
  }
}
export default App;
const EditorConstruction: React.FC<any> = (props) => {
  console.log(props);
  useEffect(() => {
    const foundMeme = props.memes.find(
      (m: IMeme) => m.id === Number(props.match.params?.id)
    );
   props.selectmeme(foundMeme);
  }, [props]);
  return (
    <FlexWide>
      <ConnectedMemeSvgViewer />
      <ConnectedMemeForm />
    </FlexWide>
  );
};
function mstp(s: IStoreState, p: any) {
  return { ...p, memes: s.ressources.memes };
}
function mdtp(d: Function) {
  return {
    selectmeme: (meme: IMeme|undefined) =>
      d({ type: "UPDATE_MEME", value: meme ? meme : emptyMeme }),
  };
}
const EditorConstructionWithRouter = withRouter(
  connect(mstp, mdtp)(EditorConstruction)
);
