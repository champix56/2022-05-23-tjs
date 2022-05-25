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
import { ADR_REST, REST_RESSOURCES } from "./config/config";
import MemeThumbnail from "./components/MemeThumbnail/MemeThumbnail";
interface IAppState {
  meme: IMeme;
  memes: Array<IMeme>;
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
      memes: [],
      images: [],
    };
  }
  componentDidMount() {
    const pimg=fetch(`${ADR_REST}${REST_RESSOURCES.images}`, {
      method: "GET",
      headers: { Accept: "application/json" },
    }).then((f) => f.json());
    const pmeme=fetch(`${ADR_REST}${REST_RESSOURCES.memes}`, {
      method: "GET",
      headers: { Accept: "application/json" },
    })
      .then((f) => f.json())

    //const tm=new Promise(()=>{setTimeout(()=>{},100)})
    //const prAll= 
    Promise.all([pimg,pmeme]).then(arr_arr=>{
      this.setState({ images: arr_arr[0],memes:arr_arr[1] });
     })
     /*Promise.race([tm,prAll]).then(f=>{
       console.log(f);
     })*/
  }
  render() {
    return (
      <div className="App" style={{ textAlign: "center" }}>
        <Header />
        <Navbar />
        <MemeThumbnail memes={this.state.memes} images={this.state.images} />
        <FlexWide>
          <MemeSVGViewer
            meme={this.state.meme}
            image={this.state.images.find(
              (img: IImage) => img.id === this.state.meme.imageId
            )}
          />
          <MemeForm
            meme={this.state.meme}
            onMemeChange={(meme: IMeme) => this.setState({ meme: meme })}
            images={this.state.images}
          />
        </FlexWide>
        <Footer>{JSON.stringify(this.state.meme)}</Footer>
      </div>
    );
  }
}
export default App;
