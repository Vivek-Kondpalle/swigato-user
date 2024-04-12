import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ marginHorizontal: 8, marginVertical: 16 }}>

      <View style={{ paddingHorizontal: 8, paddingVertical: 16, flexDirection: 'row', gap: 8, borderWidth: 0.5, borderColor: 'grey', borderRadius: 12 }}>
        <Image
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg",
            height: 100,
            width: 100
          }}
          style={{ borderRadius: 50 }}
        />
        <View>
          <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Vivek</Text>
          <Text style={{ fontSize: 16, fontWeight: '400' }}>free2rhome@gmail.com</Text>
        </View>
      </View>

      <View style={{ marginVertical: 16, gap: 16 }}>

        <Pressable onPress={() => {navigation?.navigate('UserProfilePage')}} style={{ backgroundColor: 'white', paddingHorizontal: 16, paddingVertical: 16, borderRadius: 8 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
              <View style={{ backgroundColor: '#f2f6fa', padding: 4, borderRadius: 50 }}>
                <Feather name="user" size={18} color="#95a3b8" />
              </View>
              <View>
                <Text>Your Profile</Text>
              </View>
            </View>

            <AntDesign name="right" size={18} color="#9da4a6" />
          </View>
        </Pressable>

        <Pressable onPress={() => {navigation?.navigate('FavoritesPage')}} style={{ backgroundColor: 'white', paddingHorizontal: 16, paddingVertical: 16, borderRadius: 8 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
              <View style={{ backgroundColor: '#f2f6fa', padding: 4, borderRadius: 50 }}>
                <AntDesign name="hearto" size={18} color="#95a3b8" />
              </View>
              <View>
                <Text>Favourites</Text>
              </View>
            </View>

            <AntDesign name="right" size={18} color="#9da4a6" />
          </View>
        </Pressable>

        <Pressable onPress={() => {navigation?.navigate('AddressBookPage')}} style={{ backgroundColor: 'white', paddingHorizontal: 16, paddingVertical: 16, borderRadius: 8 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
              <View style={{ backgroundColor: '#f2f6fa', padding: 4, borderRadius: 50 }}>
                <FontAwesome name="address-book" size={18} color="#95a3b8" />
              </View>
              <View>
                <Text>Address Book</Text>
              </View>
            </View>

            <AntDesign name="right" size={18} color="#9da4a6" />
          </View>
        </Pressable>

      </View>
    </View>
  )
}

export default ProfileScreen