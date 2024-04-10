import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const OrderSeachBar = () => {
    const [search, setSearch] = useState('')
    return (
        <View style={{ flexDirection: 'row', marginVertical: 16, padding: 16, backgroundColor: 'white', justifyContent: 'space-between', alignItems: 'center', borderRadius: 16 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <AntDesign name="search1" size={20} color='#f04f5f' />
                <TextInput onChangeText={setSearch} value={search} placeholder='Search by restaurant or dish' />
            </View>
            <Pressable>
                <Feather name="mic" size={20} color='#f04f5f' />
            </Pressable>
        </View>
    )
}

export default OrderSeachBar