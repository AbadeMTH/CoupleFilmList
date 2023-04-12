import { StyleSheet } from "react-native";

export const estilo = (tema) => {
    return StyleSheet.create({
        centralizaModal: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-end'
        },
        centralizaModalAlerta: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginTop: '30%',
        },
        modalAlerta: {
            height: 100,
            width: 200,
            backgroundColor: tema.fundoModal,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            shadowColor: tema.sombraModal,
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 1,
            shadowRadius: 6.27,
            elevation: 10,
            paddingHorizontal: 5,
        },
        modal: {
            backgroundColor: tema.fundoModal,
            paddingHorizontal: 16,
            paddingTop: 16,
            paddingBottom: 32,
            marginTop: 8,
            marginHorizontal: 16,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            shadowColor: tema.sombraModal,
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 1,
            shadowRadius: 6.27,
            elevation: 10,
        },
        modalTitulo: {
            fontSize: 28,
            fontWeight: 'bold',
            marginBottom: 18,
            color: tema.corTextoModal,
        },
        modalTituloAlerta: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
            color: tema.corTextoModal,
        },
        modalInput: {
            fontFamily: 'ArvoRegular',
            fontSize: 14,
            marginBottom: 12,
            paddingHorizontal: 4,
            borderBottomWidth: 1,
            borderBottomColor: '#996DFF',
            color: tema.corTextoModalInput,
        },
        modalPicker: {
            elevation: 4,
            borderRadius: 5,
            borderColor: '#EEEEEE',
            marginBottom: 12,
            backgroundColor: tema.fundoPicker,
        },
        areaData: {
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 20,
        },
        botaoDatePicker: {
            marginBottom: 5,
        },
        textoDatePicker: {
            fontWeight: 'bold',
            color: tema.corTextoDataPicker,
        },
        dataSelecionada: {
            color: tema.corTextoDataPicker,
        },
        modalSubTitulo: {
            fontSize: 14,
            marginBottom: 8,
            color: tema.corTextoModal,
        },
        modalBotoes: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        modalBotaoSalvar: {
            backgroundColor: '#2ea805',
            borderRadius: 5,
            padding: 8,
            width: 80,
            alignItems: 'center',
        },
        modalBotaoDeletar: {
            backgroundColor: '#d62a18',
            borderRadius: 5,
            padding: 8,
            width: 80,
            alignItems: 'center',
        },
        modalBotaoCancelar: {
            backgroundColor: '#057fa8',
            borderRadius: 5,
            padding: 8,
            width: 80,
            alignItems: 'center',
        },
        modalBotaoTexto: {
            color: '#FFFFFF',
        },
        adicionarIcone: {
            backgroundColor: '#996DFF',
            justifyContent: 'center',
            height: 64,
            width: 64,
            margin: 16,
            alignItems: 'center',
            borderRadius: 9999,
            position: 'absolute',
            bottom: 0,
            right: 0,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
        },
        adicionarIconeTexto: {
            fontSize: 32,
            lineHeight: 40,
            color: '#FFFFFF',
        }
    });
}