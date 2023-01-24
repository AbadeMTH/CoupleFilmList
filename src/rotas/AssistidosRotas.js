import React from 'react';

import Assistidos from '../Telas/Assistidos';
import NaoAssistidosRotas from './NaoAssistidosRotas';

export default function AssistidosRotas(){
    return(
        <NaoAssistidosRotas ComponentePrincipal={Assistidos}/>
    );
}