import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

import Texto from '../../../componentes/Texto'

const width = Dimensions.get("screen").width;

export default function Topo({titulo, topo}) {
  return<>
    <Image source={topo} style={estilos.topo} />
    <Texto style={estilos.titulo}>{titulo}</Texto>
  </>;
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: (578 / 768) * width,
      },
      titulo: {
        position: "absolute",
        color: "white",
        textAlign: "center",
        width: "100%",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
        padding: 16,
      },
})