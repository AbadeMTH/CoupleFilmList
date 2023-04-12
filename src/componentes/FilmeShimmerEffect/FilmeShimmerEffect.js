import React, { useContext } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { estilo } from '../Filme/estilos';
import { TemaContext } from '../../contexts/TemaContext';
import shimmerGif from '../../../assets/shimmerGif.gif';


export default function FilmeShimmerEffect() {
    const statusCor = '#FFF'

    const { temaEscolhido } = useContext(TemaContext);
    const estilos = estilo(statusCor, temaEscolhido);

    return (
        <TouchableOpacity style={estilos.card} onPress={() => { }}>
            <Image source={shimmerGif} style={[{ width: 225, height: 15, borderRadius: 15 }, estilos.corOverlay]} />
            <View style={estilos.linha}>
                <View>
                    <Image source={shimmerGif} style={[{ width: 100, height: 15, marginTop: 20, borderRadius: 15 }, estilos.corOverlay]} />
                </View>
            </View>
            <View style={estilos.anotacaoCentralizado}>
                <Image source={shimmerGif} style={[{ width: 50, height: 15, marginTop: 15, borderRadius: 15 }, estilos.corOverlay]} />
                <Image source={shimmerGif} style={[{ width: 275, height: 15, marginTop: 15, borderRadius: 15 }, estilos.corOverlay]} />
            </View>
            <View style={estilos.cliqueParaEditarContainer}>
                <Image source={shimmerGif} style={[{ width: 75, height: 15, marginTop: 15, borderRadius: 15 }, estilos.corOverlay]} />
            </View>
        </TouchableOpacity>
    );
}

