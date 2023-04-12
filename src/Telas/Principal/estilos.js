import { StyleSheet } from "react-native";

export const estilo = (tema) => {
    return StyleSheet.create({
        fundoTela: {
            backgroundColor: tema.fundoApp,
            flex: 1,
        },
    });
}