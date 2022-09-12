import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Image, ImageBackground } from 'react-native';
import { Center, HStack, VStack, Text, Box, Button, Avatar } from 'native-base';

export function Details() {
    return (
        <ImageBackground source={{ uri: 'https://play.hbomax.com/default-1920x1536.png' }} style={{ flex: 1 }}>
            <VStack flex={1}>
                <Center>
                    <Image
                        style={{ resizeMode: 'cover', width: 400, height: 230, }}
                        source={{ uri: 'https://art-gallery-latam.api.hbo.com/images/GYtrbdA0Onaa5ogEAAAAI/tileburnedin?v=d72cd2759e7ca553854fe9c563bb517d&size=240x135&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:hbo&language=pt-br' }} />
                </Center>
                <HStack mx={6} mb={4}>
                    <Box flexDirection='row' alignItems='center'>
                        <Button bg='transparent' borderRadius={100} w={20} borderWidth={2} borderColor='#6601e5'>
                            <Feather name="play" size={24} color="white" />
                        </Button>
                        <Text color='white' fontSize={26} fontFamily='heading' mx={4}>
                            The Batman
                        </Text>
                    </Box>
                </HStack>
                <VStack>
                    <Box>
                        <Text color='white' fontSize={10} mx={6}>
                            Bruce Wayne é um jovem bilionário da cidade de Gotham City,
                            Nova Jersey, que também age secretamente como o vigilante noturno Batman após o assassinato dos seus pais.
                        </Text>
                    </Box>

                    <VStack mx={6} my={10}>
                        <Text color='white' fontSize={16} mb={2}>
                            Trailer
                        </Text>

                        <Box justifyContent='center'>
                            <ImageBackground source={{ uri: 'https://art-gallery-latam.api.hbo.com/images/GYtrbdA0Onaa5ogEAAAAI/tileburnedin?v=d72cd2759e7ca553854fe9c563bb517d&size=240x135&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:hbo&language=pt-br' }} style={{ whidth: 400, height: 200 }}>
                                <Center>
                                    <Button bg='transparent' borderRadius={100} w={20} borderWidth={2} borderColor='#6601e5' mt={20}>
                                        <Feather name="play" size={24} color="white" />
                                    </Button>
                                </Center>
                            </ImageBackground>
                        </Box>
                    </VStack>

                    <Box mx={6}>
                        <Text color='white' fontSize={24} fontFamily='heading'>Atores</Text>
                    </Box>
                    <HStack justifyContent='space-between' mx={4} mt={4}>
                        <Box mt={6} alignItems='center' >
                            <Avatar source={{ uri: 'https://vizer.tv/content/people/45/38072.webp' }}
                                size={10} bg='transparent' borderWidth={2} borderColor='#6601e5'
                            >DH</Avatar>
                            <Text color='white' fontSize={9}>
                                Robert Pattinzoni
                            </Text>
                        </Box>
                        <Box mt={6} alignItems='center' >
                            <Avatar source={{ uri: 'https://vizer.tv/content/people/45/38072.webp' }}
                                size={10} bg='transparent' borderWidth={2} borderColor='#6601e5'
                            >DH</Avatar>
                            <Text color='white' fontSize={9}>
                                Robert Pattinzoni
                            </Text>
                        </Box>
                        <Box mt={6} alignItems='center' >
                            <Avatar source={{ uri: 'https://vizer.tv/content/people/45/38072.webp' }}
                                size={10} bg='transparent' borderWidth={2} borderColor='#6601e5'
                            >DH</Avatar>
                            <Text color='white' fontSize={9}>
                                Robert Pattinzoni
                            </Text>
                        </Box>
                    </HStack>
                </VStack>
            </VStack>
        </ImageBackground >
    );
}