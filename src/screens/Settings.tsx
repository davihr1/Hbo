import { Ionicons, AntDesign, MaterialIcons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { Box, Button, Text, HStack, VStack, Center, ScrollView } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';


export function Settings() {
    const navigation = useNavigation();

    function handleGoback() {
        navigation.goBack();
    }

    return (
        <VStack bg="#190667" flex='1' safeArea>
            <ScrollView>


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

                        <Text color='white' fontSize={12}>
                            Configurações
                        </Text>

                    </VStack>
                </HStack>

                <HStack mx={4} my={4} justifyContent='space-between' alignItems='center'>
                    <Box flexDirection='row' alignItems='center'>
                        <Ionicons name="mail-outline" size={24} color="white" />

                        <Text color='white' ml={4} fontFamily='heading'>Seu Email</Text>
                    </Box>

                    <Text color='white'>
                        davihr1@exem****
                    </Text>
                </HStack>


                <HStack mx={4} my={4} justifyContent='space-between' alignItems='center'>
                    <Box flexDirection='row' alignItems='center'>
                        <AntDesign name="clouddownloado" size={24} color="white" />

                        <Text color='white' ml={4} fontFamily='heading'>Download</Text>
                    </Box>

                    <Text color='white'>
                        HD
                    </Text>
                </HStack>

                <HStack mx={4} my={4} justifyContent='space-between' alignItems='center'>
                    <Box flexDirection='row' alignItems='center'>
                        <Ionicons name="person" size={24} color="white" />

                        <Text color='white' ml={4} fontFamily='heading'>Perfil</Text>
                    </Box>

                    <Text color='white'>
                        4 e 1 Infantil
                    </Text>
                </HStack>


                <HStack mx={4} my={4} justifyContent='space-between' alignItems='center'>
                    <Box flexDirection='row' alignItems='center'>
                        <MaterialIcons name="video-settings" size={24} color="white" />

                        <Text color='white' ml={4} fontFamily='heading'>Qualidade do video</Text>
                    </Box>

                    <Box>
                        <MaterialIcons name="4k-plus" size={34} color="white" />
                    </Box>
                </HStack>

                <VStack>
                    <Center mt={10}>
                        <VStack alignItems='center'>
                            <Text color='white' fontSize={26} fontFamily='heading'>Plano</Text>
                            <Text color='white' fontSize={14} opacity={.6}>Premium</Text>
                        </VStack>
                    </Center>

                    <HStack mt={40} mx={10} justifyContent='space-between'>
                        <Box flexDirection='row'>
                            <MaterialIcons name="personal-video" size={24} color="white" />
                            <Text color='white' mx={4} fontFamily='heading' >Telas</Text>
                        </Box>
                        <Text color='white'>4</Text>
                    </HStack>

                    <HStack my={10} mx={10} justifyContent='space-between'>
                        <Box flexDirection='row'>
                            <FontAwesome5 name="amazon-pay" size={24} color="white" />

                            <Text color='white' mx={4} fontFamily='heading' >Davi Henrique</Text>
                        </Box>
                        <Text color='white'>R$ 20,00</Text>
                    </HStack>

                    <VStack mt={6} alignItems='center'>
                        <Button w={280} h={16} bg='#190647'
                            leftIcon={<MaterialIcons name="cancel" size={24} color="red" />}
                        >

                            <Text mx={2} color='white'>Cancelar Assinatura</Text>
                        </Button>

                        <Button w={280} h={16} mt={4} mb={6} bg='#190647'
                            leftIcon={<MaterialCommunityIcons name="google-assistant" size={24} color="white" />}
                        >

                            <Text mx={2} color='white'>Trocar Plano</Text>
                        </Button>
                    </VStack>
                </VStack>
            </ScrollView>
        </VStack>
    );
}