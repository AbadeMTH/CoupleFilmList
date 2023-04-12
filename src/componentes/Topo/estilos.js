import { StyleSheet } from "react-native";

export const estilo = (tema) => {
    return StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#996DFF',
            paddingHorizontal: 8,
            paddingVertical: 16,
            marginBottom: 16,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
        },
        areaIconeTextoTopo: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        logo: {
            marginRight: 10,
            color: tema.corIconeTopo,
        },
        titulo: {
            fontSize: 20,
            lineHeight: 40,
            fontWeight: 'bold',
            color: tema.corTextoTopo,
        },
        botaoSeletorTema: {
            marginHorizontal: 5,
        },
        seletorTema: {
            height: 30,
            width: 30,
            color: tema.corIconeTopo,
        },
    });
}