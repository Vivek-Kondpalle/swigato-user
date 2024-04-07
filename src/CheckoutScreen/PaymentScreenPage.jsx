import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import { Entypo, AntDesign } from '@expo/vector-icons';

const PaymentScreenPage = () => {
  return (
    <ScrollView style={{ margin: 16 }}>

      {/* SwigatoMoney */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', backgroundColor: 'white', padding: 16, borderRadius: 16}}>

        <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
          
          <View>
            <Entypo name="wallet" size={24} color="black" />
          </View>

          <View>
            <Text>Swigato Money</Text>
            <Text>₹0.00</Text>
          </View>

        </View>

        <View>
          <AntDesign name="down" size={24} color="black" />
        </View>

      </View>


      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 32, marginBottom: 16 }}>
        <Text>RECOMMENDED</Text>
      </View>

      <View style={{ backgroundColor: 'white', borderRadius: 16 }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', backgroundColor: 'white', padding: 16, borderRadius: 16, borderBottomWidth: 1, borderBottomColor: 'grey' }}>
          <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
            
            <View>
              <Entypo name="wallet" size={24} color="black" />
            </View>

            <View>
              <Text>PayTM UPI</Text>
            </View>

          </View>

          <View>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', backgroundColor: 'white', padding: 16, borderRadius: 16 }}>
          <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
            
            <View>
              <Entypo name="wallet" size={24} color="black" />
            </View>

            <View>
              <Text>PhonePe UPI</Text>
            </View>

          </View>

          <View>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </View>

      </View>


      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 32, marginBottom: 16 }}>
        <Text>CARDS</Text>
      </View>

      <View style={{ backgroundColor: 'white', borderRadius: 16 }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', backgroundColor: 'white', padding: 16, borderRadius: 16 }}>
          <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
            
            <View>
              <Entypo name="wallet" size={24} color="black" />
            </View>

            <View>
              <Text>Add Credit or Debit Cards</Text>
            </View>

          </View>

          <View>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </View>
      </View>
      
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 32, marginBottom: 16 }}>
        <Text>Pay on Delivery</Text>
      </View>

      <View style={{ backgroundColor: 'white', borderRadius: 16 }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', backgroundColor: 'white', padding: 16, borderRadius: 16 }}>
          <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
            
            <View>
              <Entypo name="wallet" size={24} color="black" />
            </View>

            <View>
              <Text>Cash on Delivery</Text>
            </View>

          </View>

          <View>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </View>
      </View>

    </ScrollView>
  )
}

export default PaymentScreenPage