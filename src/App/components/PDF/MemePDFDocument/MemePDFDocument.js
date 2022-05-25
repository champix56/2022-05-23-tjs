import { Document, Image, Page, Svg, Text, View } from '@react-pdf/renderer'
import React from 'react'
import PropTypes from 'prop-types';
export default function MemePDFDocument(props) {
    return (
        <Document title={'pdf-' + props.meme.titre} >
            <Page size='A4' orientation='landscape'>
                <View>
                    <Text style={{textAlign:'center', textDecoration:'underline'}}>{props.meme.titre}</Text>
                    <Svg viewBox={'0 0 ' + (props.image?props.image.w:'1000') + ' ' +(props.image? props.image.h:'1000')} >
                        {props.image&&<Image source={'/img/' + props.image.url} x="0" y="0" />}
                        <Text x={props.meme.x} y={props.meme.y} fill={props.meme.color} style={{
                            fontSize:props.meme.fontSize,
                            textDecoration:(props.meme.underline?'underline':'none'),
                            fontStyle:(props.meme.italic?'italic':'normal'),
                            fontWeight: props.meme.fontWeight }}>{props.meme.text}</Text>
                    </Svg>
                </View>
            </Page>
        </Document>
    )
}
MemePDFDocument.propTypes = {
    meme: PropTypes.object.isRequired,
    image: PropTypes.object
}