import React from 'react';
import { VStack, Center, Box, Text, Button } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, View, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const url = { uri: 'https://artist.api.cdn.hbo.com/images/5E566E276BED440E86E310C598226DC0/background?v=8c6b9d49911c0cf8d9fa461e38a9e0ba&size=750x1334&protection=false&scaleDownToFit=true' };

export function Max() {
    const navigation = useNavigation();

    function handleHome() {
        navigation.navigate('Max');
    }
    return (
        <ImageBackground source={url} style={{ flex: 1 }}>
            <VStack flex={1} justifyContent='flex-end' mb={20}>
                <Box w='full' h={80} alignItems='center'>
                    <Center mb={8} mx={4}>
                        <Text fontFamily='heading' color='white' fontSize={30} >
                            Uma Experiencia simples e completa
                        </Text>

                        <Text mx={4} sontSize={20} opacity={.6} color='white'>
                            Conheça personagens icônicos e descubra novas historias exclusivas
                        </Text>
                    </Center>
                    <Button w={340} bg='#cc62ed10' onPress={handleHome} _pressed={{ bg: '#cc70ed' }}
                        borderRadius={50} borderWidth={2} borderColor='#cc62ed'>
                        <Text fontSize={20} color='white' p={2}>
                            Acessar conta
                        </Text>
                    </Button>
                    <Button w={340} bg='#cc62ed89' mt={4} borderRadius={20}>
                        <Text fontSize={20} color='white' p={2}>
                            Cadastre-se
                        </Text>
                    </Button>
                </Box>
            </VStack>
        </ImageBackground>
    );
}