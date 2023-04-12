import { Picker } from '@react-native-picker/picker';
import React, { useContext, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

import { TemaContext } from '../../contexts/TemaContext';
import { filtraFilmes, filtraTodosFilmesPorNome, filtraTodosFilmesPorNomeEStatus } from '../../servicos/requisicoes/Filmes';
import Texto from '../Texto/Texto';
import { estilo } from './estilos';

export default function Filtro({ mostraFilmes, setFilmes }) {
    const [status, setStatus] = useState('Todos');
    const [filmeBusca, setFilmeBusca] = useState('');

    const { temaEscolhido } = useContext(TemaContext);
    const estilos = estilo(temaEscolhido);

    async function mostraFilmesFiltrados(statusSelecionado) {
        setStatus(statusSelecionado);
        setFilmeBusca('');
        if (statusSelecionado === 'Todos') {
            mostraFilmes();
        } else {
            setFilmes(await filtraFilmes(statusSelecionado));
        }
    }

    async function mostraFilmesFiltradosPorNome(nomeDigitado, status) {
        setFilmeBusca(nomeDigitado);
        if (status === 'Todos') {
            setFilmes(await filtraTodosFilmesPorNome(nomeDigitado));
        } else {
            setFilmes(await filtraTodosFilmesPorNomeEStatus(nomeDigitado, status));
        }
    }

    async function limpaFilmeEMostra() {
        setFilmeBusca('');
        setStatus('Todos');
        setFilmeBusca(await mostraFilmes());
    }   

    return (
        <>
            <View style={estilos.Picker}>
                <Picker
                    selectedValue={status}
                    onValueChange={statusSelecionado => mostraFilmesFiltrados(statusSelecionado)}
                >
                    <Picker.Item label='Terminado' value='Terminado' />
                    <Picker.Item label='Não terminado' value='Não terminado' />
                    <Picker.Item label='Não assistido' value='Não assistido' />
                    <Picker.Item label='Não lançado ainda' value='Não lançado ainda' />
                    <Picker.Item label='Todos' value='Todos' />
                </Picker>
            </View>

            <View style={estilos.inputFilme}>
                <TextInput
                    autoCapitalize='none'
                    placeholder='Digite o nome do filme/série para buscar'
                    placeholderTextColor={'#000000'}
                    value={filmeBusca}
                    onChangeText={(nomeDigitado) => mostraFilmesFiltradosPorNome(nomeDigitado, status)}
                    style={estilos.inputFilmeEstilizado}
                />
                
                <TouchableOpacity style={estilos.botaoLimpar} onPress={() => limpaFilmeEMostra()}>
                    <Texto style={estilos.textoBotaoLimpar}>Limpar</Texto>
                </TouchableOpacity>
            </View>
        </>
    );
}
