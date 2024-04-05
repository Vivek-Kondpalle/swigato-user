import { View, Text } from 'react-native'
import React from 'react'

const FoodType = (props) => {
    const foodType = props?.type;


    return (
        <View style={{ width: 16, height: 16, backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderColor: foodType === 'veg' ? 'green' : 'red', borderWidth: 1 }}>
            <View style={{ width: 8, height: 8, backgroundColor: foodType === 'veg' ? 'green' : 'red', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 50 }}></View>
        </View>
    )
}

export default FoodType