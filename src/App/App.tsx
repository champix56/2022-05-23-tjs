import React from "react";
import "./App.css";
import FlexWide from "./components/layout/FlexWide/FlexWide";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";
import MemeThumbnail from "./components/MemeThumbnail/MemeThumbnail";
import ConnectedMemeSvgViewer from "./components/ConnectedMemeSvgViewer/ConnectedMemeSvgViewer";
import { ConnectedMemeForm } from "./components/MemeForm/MemeForm";
import { ConnectedModal } from "./components/Modal/Modal";
import { Link, Route, Switch } from "react-router-dom";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <div className="App" style={{ textAlign: "center" }}>
          <Header />
          <Navbar />
          <div>
            <Link to="/">home</Link>&nbsp;<Link to="/editor">editeur</Link>
            &nbsp;<Link to="/thumbnail">thumbnail</Link>&nbsp;
          </div>
          <Switch>
            <Route path="/" exact>
              <h1>Bienvenu sur l'app</h1>
            </Route>
            <Route path="/editor">
              <FlexWide>
                <ConnectedMemeSvgViewer />
                <ConnectedMemeForm />
              </FlexWide>
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
