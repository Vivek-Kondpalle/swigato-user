import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign, Feather, Foundation } from '@expo/vector-icons';


const AddressBookScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, marginHorizontal: 12 }}>
      <ScrollView style={{ marginVertical: 24 }}>
        <Pressable onPress={() => { navigation?.navigate('AddAddressScreen') }} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', borderRadius: 16, paddingVertical: 12, paddingHorizontal: 12, marginBottom: 16 }}>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Feather name="plus" size={24} color="#f04f5f" />
            <Text style={{ color: '#f04f5f' }}>Add Address</Text>
          </View>
          <View>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </Pressable>
        {
          [1, 2, 3, 4, 5, 6]?.map((item, index) => {
            return (
              <View key={index} style={{ marginVertical: 8 }}>
                <View style={{ backgroundColor: 'white', padding: 12, borderRadius: 12 }}>
                  <View style={{ flexDirection: 'row', gap: 16, justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <Foundation name="home" size={24} color="black" />
                      <Text>8m</Text>
                    </View>
                    <View style={{ gap: 8 }}>
                      <Text>Home</Text>
                      <Text numberOfLines={3} ellipsizeMode="tail">Park View Comforts, 101, 1-floor, sector 3, HSR Layout, Bangalore, 560102</Text>
                    </View>
                  </View>
                </View>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default AddressBookScreen