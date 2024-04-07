import React, { useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'

const PersonalDetailsScreenPage = () => {
  const [fullName, setFullName] = useState('');
  const [phNumber, setPhNumber] = useState('');
  return (
    <View style={{ margin: 16 }}>

      <View style={{ alignItems: 'center', marginBottom: 32 }}>
        <Text style={{ fontSize: 16 }}>Personal Details</Text>
      </View>

      <View style={{ gap: 48 }}>

        <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey' }}>
          <TextInput onChangeText={setFullName} value={fullName} placeholder='Full Name' />
        </View>

        <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey' }}>
          <TextInput onChangeText={setPhNumber} value={phNumber} placeholder='Phone Number' keyboardType='numeric' />
        </View>

        <Pressable style={{ backgroundColor: '#f04f5f', paddingVertical: 16, alignItems: 'center', borderRadius: 8 }}>
          <Text style={{ color: 'white' }}>Continue</Text>
        </Pressable>

      </View>

    </View>
  )
}

export default PersonalDetailsScreenPage