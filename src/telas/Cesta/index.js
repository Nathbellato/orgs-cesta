import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Item from "./componentes/Item";
import Texto from "../../componentes/Texto";

export default function Cesta({ topo, detalhes, itens }) {
  return <>
      <FlatList
//FlatList cria lista otimizadas, pegando o render da 
//classe Item
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return<>
            <Topo {...topo} /*Usar {...algumNome} pega 
            o dado inteiro que foi mockado, depois 
            dentro da classe tira os dados que precisam */ 
            />
            <View style={estilos.cesta}>
              <Detalhes {...detalhes} />
              <Texto style={estilos.titulo}>
                {itens.titulo}
              </Texto>
            </View>
          </>;
        }}
      />
    </>
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
});
