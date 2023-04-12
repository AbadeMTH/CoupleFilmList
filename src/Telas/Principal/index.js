import React, { useContext, useEffect, useState } from 'react';
import { FlatList, LayoutAnimation, View } from 'react-native';

import Filme from '../../componentes/Filme/Filme';
import FilmeEditor from '../../componentes/FilmeEditor/FilmeEditor';
import FilmeShimmerEffect from '../../componentes/FilmeShimmerEffect/FilmeShimmerEffect';
import Filtro from '../../componentes/Filtro/Filtro';
import Topo from '../../componentes/Topo/Topo';
import { TemaContext } from '../../contexts/TemaContext';
import { buscaFilmes } from '../../servicos/requisicoes/Filmes';
import { estilo } from './estilos';

export default function Principal() {
    useEffect(() => {
        mostraFilmes();

        setTimeout(() => {
            setTempo(true);
        }, 2100);
    }, []);

    const [tempo, setTempo] = useState(false);

    const [filmes, setFilmes] = useState([]);
    const [filmeSelecionado, setFilmeSelecionado] = useState({});

    const { temaEscolhido } = useContext(TemaContext);
    const estilos = estilo(temaEscolhido);

    async function mostraFilmes() {
        const todosFilmes = await buscaFilmes();
        setFilmes(todosFilmes);
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
            {tempo ?
                <View style={estilos.fundoTela}>

                    <Topo />
                    <Filtro mostraFilmes={mostraFilmes} setFilmes={setFilmes} />

                    <FlatList
                        data={filmes}
                        renderItem={(filme) => <Filme setFilmeSelecionado={setFilmeSelecionado} {...filme} />}
                        keyExtractor={filme => filme.id}
                        showsVerticalScrollIndicator={false}
                        style={estilos.fundoTela}
                    />
                </View>
                :
                <View style={estilos.fundoTela}>
                    <Topo />
                    <Filtro mostraFilmes={mostraFilmes} setFilmes={setFilmes} />
                    <FilmeShimmerEffect />
                    <FilmeShimmerEffect />
                    <FilmeShimmerEffect />
                </View>
            }

            <FilmeEditor mostraFilmes={mostraFilmes} filmeSelecionado={filmeSelecionado} setFilmeSelecionado={setFilmeSelecionado} />
        </>
    );
}

