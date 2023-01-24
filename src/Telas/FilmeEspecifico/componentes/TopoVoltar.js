import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Tv from '../../../assets/tv.svg';
import IconeVoltar from '../../../assets/arrow-left.svg';
import Texto from '../../../componentes/Texto';

export default function Topo(){
    const navigation = useNavigation();

    return(
        <View style={estilos.container}>
            <TouchableOpacity style={estilos.voltar} onPress={() => {navigation.goBack()}}>
                <IconeVoltar width={30} height={30} color={'#202024'}/>
            </TouchableOpacity>
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
    },
    voltar: {
        marginRight: 16,
        marginLeft: 8,
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