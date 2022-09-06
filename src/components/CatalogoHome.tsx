import React from 'react';
import { VStack, ScrollView, Text } from 'native-base';
import { Image } from 'react-native';

export function CatalogoHome() {
    return (
        <>
            <VStack mt={5}>
                <Text color='white' fontFamily='body' fontSize={18} ml={2} mb={2}>Lançamentos</Text>
                <ScrollView horizontal ml={2}>
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/yPuyVIbMuz4V9CHIvuLy6IzPjby.jpg' }} />
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/9nnQIvKliuKndMHsoLTiTShuY9l.jpg' }} />
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/stTEycfG9928HYGEISBFaG1ngjM.jpg' }} />
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://image.tmdb.org/t/p/w342/y47TQybIv7GqrrAkmnt6jFciP7a.jpg' }} />
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://image.tmdb.org/t/p/w342/cfhfcEt4bOXuVZkTC0nNBpqqiWb.jpg' }} />
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/tzFAboMUGJKoPQEtlxfxbbYsSWa.jpg' }} />
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg' }} />
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/fBIzAD9ZDdNVNdsNPdsMUfrM3fI.jpg' }} />
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/62HCnUTziyWcpDaBO2i1DX17ljH.jpg' }} />
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://www.themoviedb.org/t/p/w220_and_h330_face/qNAPgepJ4NHNA74ThVsxQEOUceJ.jpg' }} />
                    <Image style={{ width: 110, height: 150, marginRight: 5 }} source={{ uri: 'https://image.tmdb.org/t/p/w342/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg' }} />
                </ScrollView>
            </VStack>
        </>
    );
}