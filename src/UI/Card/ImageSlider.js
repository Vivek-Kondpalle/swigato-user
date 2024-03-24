import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel';

export const SLIDER_WIDTH = Dimensions.get('window').width * .91;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1)

const ImageSlider = (props) => {
    const images = props?.images;

    return (
        <Carousel
            layout='default'  
            data={images}
            loop={true}
            autoplay={true}
            renderItem={ItemCard}
            firstItem={1}
            autoplayInterval={4000}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            style={{ width: '100%' }}
        />
    )
}

const ItemCard = ({ item, index }) => {

    return (
        <Image
            key={index}
            source={{
                uri: `${item}`,
            }}
            style={{ height: 200, borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
        />
    )
}

export default ImageSlider