import React, { useState } from 'react';
import { Box, Button, Text, HStack, Center, VStack, Avatar, Modal, FormControl, Input } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export function Profile() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = React.useState(false);
    const [name, setName] = useState('Your nick')
    const handleChange = name => setName(name);


    function handleGoback() {
        navigation.goBack();
    }

    return (
        <VStack bg='#190636' flex={1} w='full' h='full' safeArea>
            <HStack alignItems='center' mt={4}>
                <Button bg='transparent' ml={3} onPress={handleGoback}>
                    <Ionicons name="arrow-back-circle-outline" size={24} color="white" />
                </Button>
                <Center>

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
                </Center>
            </HStack>

            <Box mt={40}>
                <VStack alignItems='center'>
                    <Avatar source={{ uri: 'https://artist.api.cdn.hbo.com/images/f6278904-efa9-420c-951b-bdcc138b7098/avatar?size=128x128' }}
                        size={200} bg='transparent' borderWidth={2} borderColor='#6601e5'
                    >DH</Avatar>
                    <Text color='white' fontSize={30} fontFamily='heading'>
                        {name}
                    </Text>
                </VStack>

                <VStack mt={20} alignItems='center'>
                    <Button mb={16} w={280} h={16} bg='#402390' borderRadius={4}>
                        Trocar Perfil
                    </Button>

                    <Button w={280} h={16} bg='#402390' borderRadius={4} onPress={() => {
                        setModalVisible(!modalVisible);
                    }}>
                        Editar Perfil
                    </Button>
                </VStack>
            </Box>


            {/* Open Modal */}
            <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard justifyContent="flex-end" bottom="4" size="lg">
                <Modal.Content bg='#6601e5'>
                    <Modal.CloseButton />
                    <Modal.Header bg='#6601e5'>
                        <Text color='white' fontFamily='heading'>Quer Mudar seu Nick?</Text>
                    </Modal.Header>
                    <Modal.Body>
                        <FormControl mt="3">
                            <FormControl.Label>
                                <Text color='white'>Digite seu novo nome</Text>
                            </FormControl.Label>
                            <Input value={name} w="100%" onChangeText={handleChange} color='white' fontSize={18} />
                        </FormControl>
                    </Modal.Body>
                    <Modal.Footer bg='#6601e5'>
                        <Button flex="1" onPress={() => {
                            setModalVisible(false);
                        }} bg='#402390'>
                            Atualizar
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>

        </VStack>
    );
}