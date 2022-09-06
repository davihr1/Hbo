import React from 'react';
import { Actionsheet, Box, Button, Text, HStack, useDisclose, VStack } from 'native-base';
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
        navigation.navigate('profile');
    }

    function handleSettings() {
        navigation.navigate('settings');
    }
    return (
        <>
            <HStack w='full' alignItems='center' justifyContent='space-between' h={20}>
                <Button bg="transparent" borderRadius='full' onPress={onOpen}>
                    <Entypo name="menu" size={24} color="white" />
                </Button>
                <Image
                    style={{ width: 200, height: 20, marginBottom: 8, marginTop: 10, resizeMode: 'contain' }}
                    source={{
                        uri: 'https://play.hbomax.com/40f1ec3e7380accdae648d90d4366e8f.png',
                    }} />

                <Button bg='transparent' onPress={handleSettings}>
                    <Ionicons name="ios-settings-outline" size={24} color="white" />
                </Button>
            </HStack>

            <Actionsheet isOpen={isOpen} onClose={onClose} >
                <Actionsheet.Content bg='#131330' >
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
                        <Text color='white'>Warner Bros</Text>
                    </Actionsheet.Item>
                    <Actionsheet.Item alignItems='center' bg='transparent'>
                        <Text color='white'>DC</Text>
                    </Actionsheet.Item>
                    <Actionsheet.Item alignItems='center' bg='transparent'>
                        <Text color='white'>Cartoon Network</Text>
                    </Actionsheet.Item>
                    <Actionsheet.Item alignItems='center' bg='transparent'>
                        <HStack>
                            <Box mx={16}>
                                <AntDesign name="search1" size={24} color="white" />
                            </Box>

                            <Box mx={16}>
                                <AntDesign name="download" size={24} color="white" />
                            </Box>

                            <Button borderRadius='full' bg='transparent' mx={16} onPress={handleProfile}>
                                <Ionicons name="person-circle" size={24} color="white" />
                            </Button>
                        </HStack>
                    </Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>
        </>
    );
}