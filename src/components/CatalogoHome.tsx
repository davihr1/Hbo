import React from 'react';
import { VStack, ScrollView, Text } from 'native-base';
import { Image } from 'react-native';

export function CatalogoHome() {
    return (
        <>
            <VStack mt={5}>
                <Text color='white' fontFamily='body' fontSize={18} pl={2} mb={2}>Lançamentos</Text>
                <ScrollView horizontal ml={2} showsHorizontalScrollIndicator={false}>
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/6vSMKqxgRREQmzSZpi1qwPg1rVm.jpg' }} />
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/q54qEgagGOYCq5D1903eBVMNkbo.jpg' }} />
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/4xNH5hHPpTJptSWANyAX3OLZoNM.jpg' }} />
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/z9a3b7DePtdo2E8NzyPwoGHGsYk.jpg' }} />
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://image.tmdb.org/t/p/w342/cfhfcEt4bOXuVZkTC0nNBpqqiWb.jpg' }} />
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/tzFAboMUGJKoPQEtlxfxbbYsSWa.jpg' }} />
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg' }} />
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/fBIzAD9ZDdNVNdsNPdsMUfrM3fI.jpg' }} />
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/62HCnUTziyWcpDaBO2i1DX17ljH.jpg' }} />
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/qNAPgepJ4NHNA74ThVsxQEOUceJ.jpg' }} />
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg' }} />
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg' }} />
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg' }} />
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg' }} />
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg' }} />
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg' }} />
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg' }} />
                </ScrollView>
            </VStack>
        </>
    );
}