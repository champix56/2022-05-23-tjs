import React from "react";
import "./App.css";
import FlexWide from "./components/layout/FlexWide/FlexWide";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";
import MemeThumbnail from "./components/MemeThumbnail/MemeThumbnail";
import ConnectedMemeSvgViewer from "./components/ConnectedMemeSvgViewer/ConnectedMemeSvgViewer";
import { ConnectedMemeForm } from "./components/MemeForm/MemeForm";

class App extends React.Component<undefined, undefined> {
  render() {
    return (
      <div className="App" style={{ textAlign: "center" }}>
        <Header />
        <Navbar />
        <MemeThumbnail />
        <FlexWide>
          <ConnectedMemeSvgViewer/>
          <ConnectedMemeForm/>
        </FlexWide>
        <Footer>Desorbaix &amp; Orsys &copy; 2022</Footer>
      </div>
    );
  }
}
export default App;
