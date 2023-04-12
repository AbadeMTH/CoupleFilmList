import { useFonts, Arvo_400Regular, Arvo_700Bold } from '@expo-google-fonts/arvo';
import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { TemaProvider } from './src/contexts/TemaContext';
import { criaTabela } from './src/servicos/requisicoes/Filmes';
import { criaTabelaTema } from './src/servicos/requisicoes/Tema';
import Principal from './src/Telas/Principal';

export default function App() {
  useEffect(() => {
    criaTabela();
    criaTabelaTema();
  }, []);

  const [fontsLoaded] = useFonts({
    'ArvoRegular': Arvo_400Regular,
    'ArvoBold': Arvo_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TemaProvider>
        <StatusBar />
        <Principal />
      </TemaProvider>
    </SafeAreaView>
  );
}

