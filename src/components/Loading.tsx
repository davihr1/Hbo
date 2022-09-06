import { Center, Spinner } from 'native-base';

export function Loading () {
    return (
        <Center flex={1} bg='#131348'>
            <Spinner color='#132490'/> 
        </Center>
    );
}