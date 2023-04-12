import { StyleSheet } from "react-native";

export const estilo = (statusCor, tema) => StyleSheet.create({
    card: {
        marginHorizontal: 16,
        marginVertical: 8,
        backgroundColor: tema.fundoCard,
        borderRadius: 12,
        padding: 18,
        shadowColor: tema.sombraCard,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 6.54,
        elevation: 5,
        opacity: 1,
    },
    nomeFilme: {
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: tema.corNomeFilme,
        marginBottom: 8,
    },
    linha: {
        flexDirection: 'row',
    },
    icone: {
        elevation: 10,
        shadowColor: '#000000',
    },
    statusFilme: {
        color: statusCor,
        marginHorizontal: 10,
        shadowColor: '#000000',
        textShadowOffset: {
            height: 0,
            width: 0,
        },
        textShadowRadius: 2,
    },
    dataLancamento: {
        color: statusCor,
        marginHorizontal: 10,
        fontWeight: 'bold',
        marginVertical: 10,
        shadowColor: '#000000',
        textShadowOffset: {
            height: 0,
            width: 0,
        },
        textShadowRadius: 2,
    },
    anotacaoCentralizado: {
        alignItems: 'center',
        marginTop: 20,
        borderWidth: 0.2,
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 20,
        borderColor: tema.bordaAnotacao,
    },
    avisoAnotacao: {
        fontWeight: 'bold',
        color: tema.corTituloAnotacao,
        fontSize: 12,
        lineHeight: 24,
        marginBottom: 5,
        marginTop: -5,
    },
    anotacao: {
        fontSize: 12,
        color: tema.corTextoAnotacao,
        textAlign: 'center',
    },
    cliqueParaEditarContainer: {
        alignItems: 'center',
    },
    cliqueParaEditarTexto: {
        fontWeight: 'bold',
        color: tema.corTituloAnotacao,
        fontSize: 12,
        lineHeight: 24,
        marginTop: 10,
    },
    corOverlay: {
        overlayColor: tema.fundoCard,
    },
});