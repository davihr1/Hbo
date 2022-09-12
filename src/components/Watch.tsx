import React from 'react';
import { VStack, ScrollView, Text, Link } from 'native-base';
import { Image } from 'react-native';

export function Watch() {
    return (
        <>
            <VStack mt={5}>
                <Text color='white' fontFamily='body' fontSize={18} pl={2} mb={2}>Continue Assistindo</Text>
                <ScrollView horizontal ml={2}>
                    <Image style={{ width: 150, height: 150, marginRight: 5 }} source={{ uri: 'https://art-gallery-latam.api.hbo.com/images/GX6A4-QarfMPDUAEAAAAo/tileburnedin?v=c572b820f8b1584a5a71da600b1f9c9b&size=200x200&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:cartoon-network:territory:adria&language=pt-br' }} />
                    <Image style={{ width: 150, height: 150, marginRight: 5 }} source={{ uri: 'https://art-gallery-latam.api.hbo.com/images/GXxitAAda0DFAlwEAAAGH/tileburnedin?v=d1f2f0af673df30473edbe592f8ee230&size=160x160&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:dc-comics&language=pt-br' }} />
                    <Image style={{ width: 150, height: 150, marginRight: 5 }} source={{ uri: 'https://art-gallery-latam.api.hbo.com/images/GXm_dGQW-q54_wwEAAEOX/tileburnedin?v=d6a3b0e07fceb0cc98ae09407fe42170&size=160x160&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:cartoon-network&language=pt-br' }} />
                    <Image style={{ width: 150, height: 150, marginRight: 5 }} source={{ uri: 'https://art-gallery-latam.api.hbo.com/images/GX9j4sw88eFy8eAEAAACn/tileburnedin?v=607e42a84b0ebe35bd434aa16637a4c0&size=160x160&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:warnerbros&language=pt-br' }} />
                    <Link href='https://mixdrop.co/f/3nvvw18pb88z9w'>
                        <Image style={{ width: 150, height: 150, marginRight: 5 }} source={{ uri: 'https://art-gallery-latam.api.hbo.com/images/GYiDbSAmIpMNvYAEAAAAI/tileburnedin?v=b27a8341dfbceafa55908d0c27cc3754&size=160x160&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:dc-comics&language=pt-br' }} />
                    </Link>
                </ScrollView>
            </VStack>
        </>
    );
}