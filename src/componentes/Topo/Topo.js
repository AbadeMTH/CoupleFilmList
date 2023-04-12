import React, { useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';

import Tv from '../../../assets/Icones/tv.svg';
import { TemaContext } from '../../contexts/TemaContext';
import Texto from '../Texto/Texto';
import { estilo } from './estilos';
import LightMode from '../../../assets/Icones/sun.svg';
import NightMode from '../../../assets/Icones/moon.svg';

export default function Topo() {
    const { temaAtual, temaEscolhido, salvarTemaNoDispositivo } = useContext(TemaContext);

    const estilos = estilo(temaEscolhido);

    return (
        <View style={estilos.container}>
            <View style={estilos.areaIconeTextoTopo}>
                <Tv width={45} height={45} style={estilos.logo} />
                <Texto style={estilos.titulo}>Couple Film List</Texto>
            </View>
            <TouchableOpacity
                value={temaAtual === 1 ? false : true}
                onPress={
                    () => temaAtual === 0 ? 
                        salvarTemaNoDispositivo(1) 
                        : 
                        salvarTemaNoDispositivo(0)
                }
                style={estilos.botaoSeletorTema}
            >
                {
                    temaAtual === 0 ?
                        <NightMode width={30} height={30} style={estilos.seletorTema} /> 
                        :
                        <LightMode width={30} height={30} style={estilos.seletorTema} />
                }
            </TouchableOpacity>
        </View>
    );
}