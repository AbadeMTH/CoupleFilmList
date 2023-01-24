import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Visto from '../assets/v-icon.png';
import NaoVisto from '../assets/x-icon.png';
import NaoTerminado from '../assets/!-icon.png';
import Texto from './Texto';

export default function AssistidoOuNao({status}){
    const getImagem = () => {
        if (status === 'Assistido'){
            return Visto;
        } else if (status === 'Ainda não terminado'){
            return NaoTerminado;
        } else {
            return NaoVisto;
        }
    }
    return(
        <View style={estilos.linhaStatus}>
            <Image source={getImagem()} style={estilos.icone}/>
            <Texto style={estilos.status}>{status}</Texto>
        </View>
    );
}

const estilos = StyleSheet.create({
    linhaStatus: {
        flexDirection: 'row',
    },
    icone: {
        width: 25,
        height: 25,
    },
    status: {
        fontSize: 16,
        color: '#C4C4CC',
        marginLeft: 8,
        marginBottom: 16,
    },
});
