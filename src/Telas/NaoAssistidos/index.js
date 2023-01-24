import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Topo from '../../componentes/Topo';
import useFilmes from '../../hooks/useFilmes';
import Filme from '../../componentes/Filme';

const TopoTela = () => {
    return <Topo />
}

export default function NaoAssistidos({filmesAssistidos}) {
    const navigation = useNavigation();
    const lista = useFilmes(filmesAssistidos);

    return (
        <FlatList
            data={lista}
            renderItem={({ item }) => <Filme {...item} aoPressionar={() => {navigation.navigate('Filme Específico', item)}}/>}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={TopoTela}
            style={estilos.background}
        />
    );
}

const estilos = StyleSheet.create({
    background: {
        backgroundColor: '#121214',
    },
});