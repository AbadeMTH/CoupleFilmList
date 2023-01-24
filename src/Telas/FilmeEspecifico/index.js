import React from 'react';
import { StyleSheet, View } from 'react-native';

import AssistidoOuNao from '../../componentes/AssistidoOuNao';
import TopoVoltar from './componentes/TopoVoltar';
import Texto from '../../componentes/Texto';

export default function FilmeEspecifico({route}){
    const {duracao, nomeFilme, sinopse, status} = route.params;
    return(
        <>
            <TopoVoltar/>
            <View style={estilos.tela}>
                <Texto style={estilos.nomeFilme}>{nomeFilme}</Texto>
                <Texto style={estilos.duracao}>{duracao}</Texto>
                <Texto style={estilos.sinopse}>Sinopse: {sinopse}</Texto>
                <AssistidoOuNao status={status}/>
            </View>
        </>
    );
}

const estilos = StyleSheet.create({
    tela: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#121214',
    },
    nomeFilme: {
        fontSize: 32,
        lineHeight: 64,
        fontWeight: 'bold',
        color: '#E1E1E6',
    },
    duracao: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 'bold',
        color: '#C4C4CC',
    },
    sinopse: {
        fontSize: 16,
        lineHeight: 42,
        color: '#C4C4CC',
    },
    status: {
        color: '#C4C4CC',
    },
});
