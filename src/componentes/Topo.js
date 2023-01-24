import React from 'react';
import { View, StyleSheet } from 'react-native';

import Tv from '../assets/tv.svg';
import Texto from './Texto';

export default function Topo(){
    return(
        <View style={estilos.container}>
            <Tv width={45} height={45} color={'#202024'} style={estilos.logo}/>
            <Texto style={estilos.titulo}>Couple Film List</Texto>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#996DFF',
        paddingHorizontal: 8,
        paddingVertical: 16,
        marginBottom: 16,
    },
    logo: {
        marginRight: 10,
    },
    titulo: {
        fontSize: 20,
        lineHeight: 40,
        fontWeight: 'bold',
        color: '#202024',
    },
});