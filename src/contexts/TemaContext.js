import { createContext, useEffect, useState } from "react";
import { temaClaro, temaEscuro } from '../estilosGlobais';
import { pegarTema, salvarTema } from "../servicos/requisicoes/Tema";

export const TemaContext = createContext();

export function TemaProvider({ children }) {
    useEffect(() => {
        pegaTemaSalvo();
    }, []);

    const [temaAtual, setTemaAtual] = useState(0);
    const temas = {
        0: temaEscuro,
        1: temaClaro,
    }

    async function pegaTemaSalvo() {
        const temaSalvo = await pegarTema();
        if (temaSalvo) {
            setTemaAtual(temaSalvo);
        }
    }

    async function salvarTemaNoDispositivo(tema) {
        await salvarTema(tema);
        setTemaAtual(tema);
    };

    return (
        <TemaContext.Provider value={{
            temaAtual,
            setTemaAtual,
            temaEscolhido: temas[temaAtual],
            salvarTemaNoDispositivo,
        }}>
            {children}
        </TemaContext.Provider>
    );
}