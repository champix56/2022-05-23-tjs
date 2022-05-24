import React from "react";
import "./App.css";
import { MemeSVGViewer } from "orsys-tjs-meme";
import FlexWide from "./components/layout/FlexWide/FlexWide";
import MemeForm from "./components/MemeForm/MemeForm";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";
import { IImage, IMeme } from "orsys-tjs-meme/dist/interfaces/common";
import EditorWrapper from "./components/EditorWrapper/EditorWrapper";
interface IAppState {
  meme: IMeme;
  images: Array<IImage>;
}
class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);
    // valeur initial du conteneur etatique
    this.state = {
      meme: {
        color: "#EC0BAE",
        fontSize: 40,
        fontWeight: "900",
        imageId: 0,
        italic: false,
        text: "1er meme",
        titre: "dummy",
        underline: false,
        x: 0,
        y: 50,
      },
      images: [],
    };
  }
  render() {
    return (
      <div className="App" style={{ textAlign: "center" }}>
        <Header />
        <Navbar />
        <FlexWide>
          <EditorWrapper meme={this.state.meme} onMemeChange={(meme: IMeme) => {
              this.setState({ meme: meme });
            }}/>
        </FlexWide>
        <Footer>{JSON.stringify(this.state.meme)}</Footer>
      </div>
    );
  }
}
export default App;
