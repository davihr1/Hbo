import React from 'react';
import { NativeBaseProvider, StatusBar, VStack } from 'native-base';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold
} from '@expo-google-fonts/inter';

import { Routes } from './src/Routes';
import { Loading } from './src/components/Loading';
import { THEME } from './src/theme/Theme';


export default function App() {
  const [fontsLoad] = useFonts({Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold});

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        bar-Style='ligth-content'
        backgroundColor='transparent'
        translucent />
      <VStack flex={1}>
        {fontsLoad ? <Routes/> : <Loading /> }
      </VStack>
    </NativeBaseProvider>
  );
}