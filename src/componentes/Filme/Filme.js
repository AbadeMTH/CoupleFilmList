import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';

import Texto from '../Texto/Texto';
import IconeTerminado from '../../../assets/Icones/check-circle.svg';
import IconeNaoTerminado from '../../../assets/Icones/help-circle.svg';
import IconeNaoAssistido from '../../../assets/Icones/x-circle.svg';
import IconeNaoLancado from '../../../assets/Icones/alert-circle.svg';
import { estilo } from './estilos';
import { TemaContext } from '../../contexts/TemaContext';


export default function Filme({ item, setFilmeSelecionado }) {
    let statusCor;
    if (item.status === 'Terminado') {
        statusCor = '#07f50f';
    } else if (item.status === 'Não terminado') {
        statusCor = '#ffff00';
    } else if (item.status === 'Não assistido') {
        statusCor = '#ff0000';
    } else {
        statusCor = '#ff702e';
    }

    const { temaEscolhido } = useContext(TemaContext);
    const estilos = estilo(statusCor, temaEscolhido);

    return (
        <TouchableOpacity style={estilos.card} onPress={() => setFilmeSelecionado(item)}>
            <Texto style={estilos.nomeFilme}>{item.filme}</Texto>
            <View style={estilos.linha}>
                {
                    item.status === 'Terminado' ?
                        <IconeTerminado style={estilos.icone} color='#07f50f' width={20} height={20} /> 
                        :
                        item.status === 'Não terminado' ?
                            <IconeNaoTerminado style={estilos.icone} color='#ffff00' width={20} height={20} /> 
                        :
                        item.status === 'Não assistido' ?
                            <IconeNaoAssistido style={estilos.icone} color='#ff0000' width={20} height={20} /> 
                        :
                            <IconeNaoLancado style={estilos.icone} color='#ff702e' width={20} height={20} />
                }
                <View>
                    <Texto style={estilos.statusFilme}>{item.status}</Texto>
                    {
                        item.status === 'Não lançado ainda' &&
                        <Texto style={estilos.dataLancamento}>Data de lançamento: {item.lancamento}</Texto>
                    }
                </View>
            </View>
            <View style={estilos.anotacaoCentralizado}>
                <Texto style={estilos.avisoAnotacao}>Anotação</Texto>
                {
                    !item.anotacao ?
                        <Texto style={estilos.anotacao}>Nenhuma</Texto> 
                        :
                        <Texto style={estilos.anotacao}>{item.anotacao}</Texto>
                }

            </View>
            <View style={estilos.cliqueParaEditarContainer}>
                <Texto style={estilos.cliqueParaEditarTexto}>Clique para editar</Texto>
            </View>
        </TouchableOpacity>
    );
}

