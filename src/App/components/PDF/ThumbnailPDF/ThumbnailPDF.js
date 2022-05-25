import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./ThumbnailPDF.module.css";
import { connect } from "react-redux";
import { Document, Image, Page, PDFDownloadLink, PDFViewer, Svg, View } from "@react-pdf/renderer";
import MemePDFDocument from "../MemePDFDocument/MemePDFDocument";

const initialState = {};

const ThumbnailPDF = (props) => {
  return (
    <>
      <div><h3>Camera</h3><br />
        <PDFViewer>
          <Document fileName="camera.pdf">
            <Page size={'A4'}>
              <View>
                <Image src="img/futurama.jpg" />
              </View>
            </Page>
          </Document>
        </PDFViewer>
        <hr />
      </div>
      <div className={style.ThumbnailPDF} data-testid="ThumbnailPDF">

        {props.memes.map((m, i) => {

          const img = props.images.find(im => im.id === m.imageId);
          console.log(img)
          return (
            <div className={style.unPDF} key={i}>
              <h3>{m.titre}</h3>
              <PDFDownloadLink
                fileName={"pdf-meme-" + m.id + '-' + m.titre}
                document={<MemePDFDocument meme={m} image={img} />}
              >
                Liens de telechargement
              </PDFDownloadLink>
              <hr />
              <PDFViewer showToolbar={true}>
                <MemePDFDocument meme={m} image={img} />
              </PDFViewer>
            </div>)
        })}
      </div>
    </>
  );
};

ThumbnailPDF.propTypes = { memes: PropTypes.array.isRequired, images: PropTypes.array.isRequired }
function mstp(s, p) {
  return { ...p, ...s.ressources };
}
function mdtp() {
  return {};
}
export default connect(mstp, mdtp)(ThumbnailPDF);

