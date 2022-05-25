import React from "react";
import "./App.css";
import FlexWide from "./components/layout/FlexWide/FlexWide";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";
import MemeThumbnail from "./components/MemeThumbnail/MemeThumbnail";
import ConnectedMemeSvgViewer from "./components/ConnectedMemeSvgViewer/ConnectedMemeSvgViewer";
import { ConnectedMemeForm } from "./components/MemeForm/MemeForm";
import { ConnectedModal, Modal } from "./components/Modal/Modal";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <div className="App" style={{ textAlign: "center" }}>
          <Header />
          <Navbar />
          <MemeThumbnail />
          <FlexWide>
            <ConnectedMemeSvgViewer />
            <ConnectedMemeForm />
          </FlexWide>
          <Footer>Desorbaix &amp; Orsys &copy; 2022</Footer>
        </div>
        <ConnectedModal />
      </>
    );
  }
}
export default App;
