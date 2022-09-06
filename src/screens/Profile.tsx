import React from 'react';
import { Box, Button, Text, HStack, VStack, Avatar } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export function Profile() {
    const navigation = useNavigation();

    function handleGoback() {
        navigation.goBack();
    }

    return (
        <VStack bg='#190636' flex={1} safeArea>
            <HStack alignItems='center' mt={4}>
                <Button bg='transparent' ml={3} onPress={handleGoback}>
                    <Ionicons name="arrow-back-circle-outline" size={24} color="white" />
                </Button>
                <VStack alignItems='center' mt={4} ml={10}>

                    <Image
                        style={{ width: 200, height: 20, marginBottom: 8, resizeMode: 'contain' }}
                        source={{
                            uri: 'https://play.hbomax.com/40f1ec3e7380accdae648d90d4366e8f.png',
                        }} />

                    <Text color='white' fontSize={14}>
                        Perfil
                    </Text>

                </VStack>
            </HStack>

            <Box mt={40}>
                <VStack alignItems='center'>
                    <Avatar source={{ uri: 'https://artist.api.cdn.hbo.com/images/f6278904-efa9-420c-951b-bdcc138b7098/avatar?size=128x128' }}
                        size={200} bg='transparent' borderWidth={2} borderColor='#6601e5'
                    >DH</Avatar>
                    <Text color='white' fontSize={30} fontFamily='heading'>
                        Davi Hr
                    </Text>
                </VStack>

                <VStack mt={20} alignItems='center'>
                    <Button mb={16} w={280} h={16} bg='#402390' borderRadius={4}>
                        Escolher outro perfil
                    </Button>

                    <Button w={280} h={16} bg='#402390' borderRadius={4}>
                        Gerenciar perfil
                    </Button>
                </VStack>
            </Box>
        </VStack>
    );
}