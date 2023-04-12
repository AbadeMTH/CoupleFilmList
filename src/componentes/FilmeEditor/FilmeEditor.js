import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import React, { useContext, useEffect, useState } from 'react';
import { Modal, Platform, ScrollView, TextInput, TouchableOpacity, View, LayoutAnimation } from 'react-native';

import { TemaContext } from '../../contexts/TemaContext';
import { atualizaFilme, adicionaFilme, removeFilme } from '../../servicos/requisicoes/Filmes';
import Texto from '../Texto/Texto';
import { estilo } from './estilos';
import IconeNaoLancado from '../../../assets/Icones/alert-circle.svg';

export default function FilmeEditor({ mostraFilmes, filmeSelecionado, setFilmeSelecionado }) {
    useEffect(() => {
        if (filmeSelecionado.id) {
            preencheModal();
            setFilmeParaAtualizar(true);
            setModalVisivel(true);
            return
        }
        setFilmeParaAtualizar(false);
    }, [filmeSelecionado]);

    const [nomeFilme, setNomeFilme] = useState('');
    const [statusFilme, setStatusFilme] = useState('Não assistido');
    const [anotacaoFilme, setAnotacaoFilme] = useState('');
    const [data, setData] = useState(new Date(Date.now()));
    const [dataAjustada, setDataAjustada] = useState('');

    const [filmeParaAtualizar, setFilmeParaAtualizar] = useState(false);

    const [datePickerVisivel, setDatePickerVisivel] = useState(false);
    const [alertaVisivel, setAlertaVisivel] = useState(false);
    const [modalVisivel, setModalVisivel] = useState(false);

    const { temaEscolhido } = useContext(TemaContext);
    const estilos = estilo(temaEscolhido);


    const onChangeDatePicker = (event, dataSelecionada) => {
        const dataAtual = dataSelecionada || data;
        setDatePickerVisivel(Platform === 'android');
        setData(dataAtual);

        let dataTemporaria = new Date(dataAtual);
        setDataAjustada(dataTemporaria.getDate() + '/' + (dataTemporaria.getMonth() + 1) + '/' + dataTemporaria.getFullYear());
    }

    async function salvaFilme() {
        if (nomeFilme === '') {
            setAlertaVisivel(true);
        } else {
            const filme = {
                nomeFilme: nomeFilme,
                statusFilme: statusFilme,
                anotacaoFilme: anotacaoFilme,
                dataAjustada: dataAjustada,
            }
            await adicionaFilme(filme);
            limpaModal();
            mostraFilmes();
        }
    }

    async function modificaFilme() {
        if (nomeFilme === '') {
            setAlertaVisivel(true);
        } else {
            const filme = {
                nomeFilme: nomeFilme,
                statusFilme: statusFilme,
                anotacaoFilme: anotacaoFilme,
                dataAjustada: dataAjustada,
                id: filmeSelecionado.id,
            }
            await atualizaFilme(filme);
            limpaModal();
            mostraFilmes();
        }
    }

    async function deletaFilme() {
        await removeFilme(filmeSelecionado);
        limpaModal();
        mostraFilmes();
    }

    function limpaModal() {
        setNomeFilme('');
        setStatusFilme('Não assistido');
        setDataAjustada(filmeSelecionado.lancamento);
        setAnotacaoFilme('');
        setFilmeSelecionado({});
        setModalVisivel(false);
    }

    function preencheModal() {
        setNomeFilme(filmeSelecionado.filme);
        setStatusFilme(filmeSelecionado.status);
        setAnotacaoFilme(filmeSelecionado.anotacao);
        setDataAjustada(filmeSelecionado.lancamento);
    }


    const animacaoCustomizada = {
        duration: 800,
        create: {
            type: LayoutAnimation.Types.spring,
            property: LayoutAnimation.Properties.scaleXY,
            springDamping: 0.7
        }
    }
    LayoutAnimation.configureNext(animacaoCustomizada);

    return (
        <>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisivel}
                onRequestClose={() => { setModalVisivel(false) }}
            >
                <View style={estilos.centralizaModal}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={estilos.modal}>
                            {
                                filmeParaAtualizar ?
                                    <Texto style={estilos.modalTitulo}>Alterar filme/série</Texto>
                                    :
                                    <Texto style={estilos.modalTitulo}>Adicionar filme/série</Texto>
                            }

                            <Texto style={estilos.modalSubTitulo}>Nome do filme/série</Texto>

                            <TextInput
                                autoCapitalize='words'
                                style={estilos.modalInput}
                                multiline={true}
                                numberOfLines={3}
                                value={nomeFilme}
                                onChangeText={novoNome => setNomeFilme(novoNome)}
                                placeholder='Digite o nome do filme/série'
                                placeholderTextColor={'#d1d1d1'}
                            />

                            <Texto style={estilos.modalSubTitulo}>Status do filme/série</Texto>

                            <View style={estilos.modalPicker}>
                                <Picker
                                    selectedValue={statusFilme}
                                    onValueChange={novoStatus => setStatusFilme(novoStatus)}
                                >
                                    <Picker.Item label='Terminado' value='Terminado' />
                                    <Picker.Item label='Não terminado' value='Não terminado' />
                                    <Picker.Item label='Não assistido' value='Não assistido' />
                                    <Picker.Item label='Não lançado ainda' value='Não lançado ainda' />
                                </Picker>
                            </View>

                            {
                                statusFilme == 'Não lançado ainda' &&
                                <View style={estilos.areaData}>
                                    <TouchableOpacity style={estilos.botaoDatePicker} onPress={() => setDatePickerVisivel(true)}>
                                        <Texto style={estilos.textoDatePicker}>Escolher data de lançamento</Texto>
                                    </TouchableOpacity>

                                    <Texto style={estilos.dataSelecionada}>{dataAjustada}</Texto>
                                </View>
                            }

                            {
                                datePickerVisivel &&
                                <DateTimePicker
                                    mode='date'
                                    is24Hour={true}
                                    value={data}
                                    onChange={onChangeDatePicker}
                                    negativeButtonLabel='Cancelar'
                                    locale='pt-BR'
                                />
                            }

                            <Texto style={estilos.modalSubTitulo}>Anotações</Texto>

                            <TextInput
                                style={estilos.modalInput}
                                multiline={true}
                                numberOfLines={3}
                                value={anotacaoFilme}
                                onChangeText={novaAnotacao => setAnotacaoFilme(novaAnotacao)}
                                placeholder='Digite suas anotações'
                                placeholderTextColor={'#d1d1d1'}
                            />

                            <View style={estilos.modalBotoes}>
                                <TouchableOpacity style={estilos.modalBotaoSalvar}
                                    onPress={
                                        filmeParaAtualizar ?
                                        modificaFilme
                                        :
                                        salvaFilme
                                    }
                                >
                                    <Texto style={estilos.modalBotaoTexto}>Salvar</Texto>
                                </TouchableOpacity>

                                {filmeParaAtualizar ?
                                    <TouchableOpacity style={estilos.modalBotaoDeletar} onPress={() => { deletaFilme() }}>
                                        <Texto style={estilos.modalBotaoTexto}>Deletar</Texto>
                                    </TouchableOpacity> : <></>
                                }

                                <TouchableOpacity style={estilos.modalBotaoCancelar} onPress={() => { limpaModal() }}>
                                    <Texto style={estilos.modalBotaoTexto}>Cancelar</Texto>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </Modal>

            <TouchableOpacity style={estilos.adicionarIcone} onPress={() => { setModalVisivel(true) }}>
                <Texto style={estilos.adicionarIconeTexto}>+</Texto>
            </TouchableOpacity>

            <Modal
                visible={alertaVisivel}
                onRequestClose={() => { setAlertaVisivel(false) }}
                animationType='none'
                transparent={true}
            >
                <View style={estilos.centralizaModalAlerta}>
                    <View style={estilos.modalAlerta}>
                        <IconeNaoLancado style={estilos.icone} color='#ff702e' width={20} height={20} />

                        <Texto style={estilos.modalTituloAlerta}>Insira um nome</Texto>
                        
                        <TouchableOpacity style={estilos.modalBotaoCancelar} onPress={() => { setAlertaVisivel(false) }}>
                            <Texto style={estilos.modalBotaoTexto}>Fechar</Texto>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
}


