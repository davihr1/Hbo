import React from 'react';
import { Actionsheet, Box, Button, Text, HStack, useDisclose, ScrollView, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { Entypo, Ionicons, AntDesign } from '@expo/vector-icons';
import { Image } from 'react-native';

export function Header() {
    const navigation = useNavigation();
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

    function handleProfile() {
        navigation.navigate('Profile');
    }

    function handleSettings() {
        navigation.navigate('Settings');
    }
    return (
        <>
            <HStack w='full' alignItems='center' justifyContent='space-between' h={20} safeArea>
                <Button bg="transparent" borderRadius='full' onPress={onOpen} _pressed={{ bg: 'transparent' }}>
                    <Entypo name="menu" size={24} color="white" />
                </Button>
                <Image
                    style={{ width: 200, height: 20, marginBottom: 8, marginTop: 10, resizeMode: 'contain' }}
                    source={{
                        uri: 'https://play.hbomax.com/40f1ec3e7380accdae648d90d4366e8f.png',
                    }} />

                <Button bg='transparent' onPress={handleSettings} _pressed={{ bg: 'transparent' }}>
                    <Ionicons name="ios-settings-outline" size={24} color="white" />
                </Button>
            </HStack>

            <Actionsheet isOpen={isOpen} onClose={onClose} >
                <Actionsheet.Content bg='#131330' >
                    <ScrollView showsVerticalScrollIndicator={false} w='full'>
                        <Actionsheet.Item alignItems='center' bg='transparent'>
                            <Text color='white'>Filmes</Text>
                        </Actionsheet.Item>
                        <Actionsheet.Item alignItems='center' bg='transparent'>
                            <Text color='white'>Series</Text>
                        </Actionsheet.Item>
                        <Actionsheet.Item alignItems='center' bg='transparent'>
                            <Text color='white'>Ultimos dias</Text>
                        </Actionsheet.Item>
                        <Actionsheet.Item alignItems='center' bg='transparent'>
                            <Text color='white'>Top 10</Text>
                        </Actionsheet.Item>
                        <Actionsheet.Item alignItems='center' bg='transparent'>
                            <Text color='white'>HBO</Text>
                        </Actionsheet.Item>
                        <Actionsheet.Item alignItems='center' bg='transparent'>
                            <Text color='white'>Max Original</Text>
                        </Actionsheet.Item>
                        <Actionsheet.Item alignItems='center' bg='transparent'>
                            <Image style={{ width: 60, height: 40 }}
                                source={{ uri: 'https://art-gallery-latam.api.hbo.com/images/hbomax-latam-brand-dc/logo?v=5ef4810b50f78b786fbd125024b7dde2&size=80x45&compression=low&protection=false&scaleDownToFit=false&language=pt-br' }} />
                        </Actionsheet.Item>
                        <Actionsheet.Item alignItems='center' bg='transparent'>
                            <Image style={{ width: 60, height: 40 }}
                                source={{ uri: 'https://art-gallery-latam.api.hbo.com/images/hbomax-latam-brand-warner-brothers/logo?v=0d3b476086e6b31370febcddb6396419&size=80x45&compression=low&protection=false&scaleDownToFit=false&language=pt-br' }} />
                        </Actionsheet.Item>
                        <Actionsheet.Item alignItems='center' bg='transparent'>
                            <Image style={{ width: 60, height: 40 }}
                                source={{ uri: 'https://art-gallery-latam.api.hbo.com/images/hbomax-latam-brand-cartoon-network/logo?v=e80a0a4df8a6d852237efa9658df657b&size=80x45&compression=low&protection=false&scaleDownToFit=false&language=pt-br' }} />
                        </Actionsheet.Item>
                        <Actionsheet.Item alignItems='center' bg='transparent'>
                            <HStack>
                                <Box mx={16} mt={4}>
                                    <AntDesign name="search1" size={24} color="white" />
                                </Box>

                                <Box mx={10} mt={4}>
                                    <AntDesign name="download" size={24} color="white" />
                                </Box>

                                <Button borderRadius='full' bg='transparent' mx={10} onPress={handleProfile}>
                                    <Image
                                        style={{ width: 46, height: 40, borderWidth: 1, borderColor: '#6606e5', borderRadius: 100 }}
                                        source={{
                                            uri: 'https://artist.api.cdn.hbo.com/images/f6278904-efa9-420c-951b-bdcc138b7098/avatar?size=128x128',
                                        }} />
                                </Button>
                            </HStack>
                        </Actionsheet.Item>
                    </ScrollView>
                </Actionsheet.Content>
            </Actionsheet>
        </>
    );
}