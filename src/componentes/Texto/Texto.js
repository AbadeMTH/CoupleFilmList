import React from 'react';
import { Text } from 'react-native';

import { estilos } from './estilos';

export default function Texto({style, children}){
    let estilo = estilos.texto;

    if (style?.fontWeight === 'bold'){
        estilo = estilos.textoNegrito;
    } 

    return(
        <>
            <Text style={[style, estilo]}>{children}</Text>
        </>
    );
}
