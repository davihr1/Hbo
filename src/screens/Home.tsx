import React from 'react';
import { Box, Center, Pressable, ScrollView, VStack } from 'native-base';
import { Header } from '../components/Header';
import { Image, ImageBackground } from 'react-native';
import { CatalogoHome } from '../components/CatalogoHome';
import { Watch } from '../components/Watch';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const navigation = useNavigation();
  function handleDetails() {
    navigation.navigate('Details');
  }
  return (
    <VStack w='full' h='full' flex={1}>
      <ImageBackground source={{ uri: 'https://play.hbomax.com/default-1920x1536.png' }} style={{ flex: 1 }}>
        <Header />
        <ScrollView>
          <Pressable onPress={handleDetails}>

          <Center my={6}>
            <Image
              style={{ resizeMode: 'contain', width: 400, height: 200, borderColor: 'white', borderWidth: 1 }}
              source={{ uri: 'https://art-gallery-latam.api.hbo.com/images/GYh64XAXve5WzZgEAAAKx/tileburnedin?v=2cf67d522f4aa980b6c25e880189826c&size=320x180&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:max-originals&language=pt-br' }} />
          </Center>
              </Pressable>
          <Watch />
          <CatalogoHome />
          <CatalogoHome />
          <CatalogoHome />
          <CatalogoHome />
          <CatalogoHome />

          <Box py={60}></Box>
        </ScrollView>
      </ImageBackground>
    </VStack>
  );
}