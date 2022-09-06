import React from 'react';
import { Box, Center, ScrollView, VStack } from 'native-base';
import { Header } from '../components/Header';
import { Image } from 'react-native';
import { CatalogoHome } from '../components/CatalogoHome';

export function Home() {
  return (
    <VStack bg='#190632' safeArea>
        <Header/>
        <ScrollView>
            <Center my={6}>
            <Image
            style={{resizeMode: 'contain', width: 400, height: 200, borderColor: 'white', borderWidth: 1}}
            source={{uri: 'https://image.tmdb.org/t/p/w1280/9QusGjxcYvfPD1THg6oW3RLeNn7.jpg'}} />
            </Center>

            <CatalogoHome />
            <CatalogoHome />
            <CatalogoHome />
            <CatalogoHome />
            <CatalogoHome />

            <Box py={60}></Box>
        </ScrollView>
    </VStack>
  );
}