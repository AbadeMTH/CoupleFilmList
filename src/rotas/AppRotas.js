import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IconePadrao from '../assets/help-circle.svg';
import IconeAssistidos from '../assets/check-circle.svg';
import IconeNaoAssistidos from '../assets/x-circle.svg';
import NaoAssistidosRotas from './NaoAssistidosRotas';
import AssistidosRotas from './AssistidosRotas';

const Tab = createBottomTabNavigator();

export default function AppRotas(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    headerShown: false,
                    tabBarIcon: ({color}) => {
                        let Icon = IconePadrao;

                        if (route.name === 'Não Assistidos'){
                            Icon = IconeNaoAssistidos;
                        } else {
                            Icon = IconeAssistidos
                        }

                        return <Icon color={color}/>
                    },
                    tabBarActiveTintColor: '#04D361',
                    tabBarInactiveTintColor: '#C4C4CC',
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontFamily: 'Arvo-Bold',
                    },
                    tabBarActiveBackgroundColor: '#996DFF',
                    tabBarInactiveBackgroundColor: '#996DFF',
                })}    
            >
                <Tab.Screen name='Não Assistidos' component={NaoAssistidosRotas} />
                <Tab.Screen name='Assistidos' component={AssistidosRotas} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}