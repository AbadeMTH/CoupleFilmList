import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import AssistidoOuNao from './AssistidoOuNao';
import Texto from './Texto';

export default function Filme({ nomeFilme, status, saibaMais, aoPressionar }) {
    return (
        <TouchableOpacity style={estilos.card} onPress={aoPressionar}>
            <Texto style={estilos.nomeFilme}>{nomeFilme}</Texto>
            <View style={estilos.linha}>
                <AssistidoOuNao status={status} />
            </View>
            <View style={estilos.saibaMaisCentralizado}>
                <Texto style={estilos.saibaMais}>{saibaMais}</Texto>
            </View>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    card: {
        marginHorizontal: 16,
        marginVertical: 8,
        backgroundColor: '#323238',
        borderRadius: 12,
        padding: 18,
        elevation: 6,
    },
    nomeFilme: {
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: '#E1E1E6',
        marginBottom: 8,
    },
    linha: {
        flexDirection: 'row',
    },
    saibaMaisCentralizado: {
        alignItems: 'center',
    },
    saibaMais: {
        fontWeight: 'bold',
        color: '#7C7C8A'
    },
});