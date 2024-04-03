import { View, Text, Pressable } from 'react-native'
import React from 'react'

import { AntDesign, Feather } from '@expo/vector-icons';

const CartButton = () => {
  return (
    <View style={{ position: 'absolute', bottom: 10, backgroundColor: 'red', width: '100%' }}>
        <View style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <View>
            <Feather name="shopping-bag" size={16} color="black" />
            <Text>1 item added</Text>
          </View>
          <View>
            <Pressable>
              <Text>Next</Text>
            </Pressable>
          </View>
        </View>
      </View>
  )
}

export default CartButton