import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import FilmeEspecifico from '../Telas/FilmeEspecifico';
import NaoAssistidos from '../Telas/NaoAssistidos';

const Stack = createNativeStackNavigator();

export default function NaoAssistidosRotas({ComponentePrincipal = NaoAssistidos}){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={ComponentePrincipal}/>
            <Stack.Screen name='Filme Específico' component={FilmeEspecifico}/>
        </Stack.Navigator>
    );
}