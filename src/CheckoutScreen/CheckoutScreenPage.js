import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import FoodType from '../UI/common/foodType'
import { AntDesign, FontAwesome6 } from '@expo/vector-icons';

const CheckoutScreenPage = () => {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 16 }}>
        {/* Items Review */}
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 16 }}>
          <Text>ITEM(S) ADDED</Text>
        </View>

        <View style={{ backgroundColor: 'white', borderRadius: 16 }}>

          {
            [1, 2, 3, 4, 5,6, 7, 8, 9, 10]?.map((item, index) => (
              <View key={index} style={{ padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }}>

                <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 8 }}>
                  {/* Food Type */}
                  <View>
                    <FoodType type={'veg'} />
                  </View>

                  {/* Food item name */}
                  <View>
                    <Text>Khatta Meetha Poha</Text>
                    <Text>₹65</Text>
                  </View>
                </View>

                {/* Food item quantity */}
                <View style={{ alignItems: 'flex-end', justifyContent: 'flex-start', gap: 4 }}>
                  <View style={styles.quantitySelector}>
                    <TouchableOpacity style={styles.button}>
                      <AntDesign name="minus" size={12} color="#f04f5f" />
                    </TouchableOpacity>

                    <Text style={styles.quantityText}>1</Text>

                    <TouchableOpacity style={styles.button}>
                      <AntDesign name="plus" size={12} color="#f04f5f" />
                    </TouchableOpacity>
                  </View>
                  <View style={{ marginRight: 8 }}>
                    <Text>₹65</Text>
                  </View>
                </View>

              </View>
            ))

          }

        </View>


        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 32 }}>
          <Text>SAVINGS CORNER</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', borderRadius: 16, paddingHorizontal: 16, paddingVertical: 12 }}>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <View style={{ backgroundColor: '#246ff0', padding: 6, borderRadius: 50 }}>
              <FontAwesome6 name="percentage" size={12} color="white" />
            </View>
            <Text>Apply coupon</Text>
          </View>
          <View>
            <AntDesign name="right" size={24} color="black" />
          </View>

        </View>

        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 32 }}>
          <Text>BILL SUMMARY</Text>
        </View>

        

      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  quantitySelector: {
    flexDirection: 'row', // Arrange items in a row
    alignItems: 'center', // Center items vertically
    borderWidth: 1, // Border to encase the component
    borderColor: 'black', // Border color
    borderRadius: 8, // Rounded corners
    backgroundColor: '#fff2f4',
  },
  button: {
    padding: 8, // Padding for touchable area
    alignItems: 'center', // Center the icon
    justifyContent: 'center', // Center the icon
  },
  quantityText: {
    paddingHorizontal: 12, // Horizontal padding around the number
    fontSize: 12, // Text size
    color: '#f04f5f', // Text color
  },
})

export default CheckoutScreenPage