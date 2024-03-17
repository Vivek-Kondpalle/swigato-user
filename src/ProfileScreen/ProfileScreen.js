import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <Text>ProfileScreen</Text>
      <Pressable onPress={() => navigation.navigate('FavoritesPage')}>
        <Text>FavoritesPage</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('UserProfilePage')}>
        <Text>UserProfilePage</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('AddressBookPage')}>
        <Text>AddressBookPage</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('LanguagePage')}>
        <Text>LanguagePage</Text>
      </Pressable>
    </View>
  )
}

export default ProfileScreen