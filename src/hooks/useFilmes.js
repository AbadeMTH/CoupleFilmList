import { useEffect, useState } from 'react';

import { carregaFilmes } from '../servicos/carregaDados';

export default function useFilmes(filmesAssistidos){
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = carregaFilmes();
        let novaLista = retorno.lista

        if (filmesAssistidos) {
            novaLista = novaLista.filter(
                (status) => status.status === 'Assistido'
            );
        } else {
            novaLista = novaLista.filter(
                (status) => status.status !== 'Assistido'
            );
        }
        setLista(novaLista);
    }, []);

    return lista;
}