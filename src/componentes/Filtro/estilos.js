import { StyleSheet } from "react-native";

export const estilo = (tema) => {
    return StyleSheet.create({
        Picker: {
            borderWidth: 0,
            borderRadius: 5,
            borderColor: tema.bordaPicker,
            marginBottom: 12,
            marginHorizontal: '5%',
            backgroundColor: tema.fundoPicker,
            elevation: 4,
            shadowColor: '#996DFF',
        },
        inputFilme: {
            marginHorizontal: '5%',
            borderWidth: 0,
            borderRadius: 20,
            height: 44,
            borderColor: tema.bordaInputFilme,
            marginBottom: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: tema.fundoInputFilme,
            elevation: 4,
            shadowColor: '#996DFF',
        },
        inputFilmeEstilizado: {
            fontFamily: 'ArvoRegular',
            paddingHorizontal: 10,
            fontSize: 9,
            width: '66.5%',
        },
        botaoLimpar: {
            width: '23.5%',
            height: '100%',
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
        },
        textoBotaoLimpar: {
            fontSize: 12,
            fontWeight: 'bold',
        },
    });
}