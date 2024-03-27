import { View, Text, Image } from 'react-native'
import React from 'react'

const FoodItemCard = () => {
  return (
    <View style={{ marginHorizontal: 8, padding: 8, borderWidth: 0.25, borderRadius: 16, marginVertical: 8 }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          {/* Left Container */}
          <View>
            <Text>Masala Dosa</Text>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
              <Text>****</Text>
              <Text>3.1K ratings</Text>
            </View>
            <View>
              <Text>₹65</Text>
            </View>
            <View>
              <Text>Description</Text>
            </View>
          </View>

          {/* Right Container */}
          <View>
            <Image 
              source={{
                uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg"
              }}
              style={{ width: 150, height: 150, borderRadius: 20}}
            />

            <View style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ paddingHorizontal: 40, paddingVertical: 8, borderWidth: 0.5, position: 'relative', bottom: 20, zIndex: 10, backgroundColor: 'white', borderRadius: 12 }}>
                <Text style={{ color: 'orange' }}>Add</Text>
              </View>
            </View>
            
          </View>

        </View>

      </View>
  )
}

export default FoodItemCard