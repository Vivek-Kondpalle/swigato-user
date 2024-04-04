import { View, Text, Pressable, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { AntDesign, Feather } from '@expo/vector-icons';

const CartButton = () => {

  const [viewModal, setViewModal] = useState(false);

  const openModal = () => {
    setViewModal(true)
  }


  return (
    <>
      <View style={{ position: 'absolute', bottom: 10, backgroundColor: 'red', width: '100%' }}>
        <View style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <View>
            <Feather name="shopping-bag" size={16} color="black" />
            <Pressable onPress={openModal}>
              <Text>1 item added</Text>
            </Pressable>
          </View>
          <View>
            <Pressable>
              <Text>Next</Text>
            </Pressable>
          </View>
        </View>


        {/* Modal Content */}
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={viewModal}
            onRequestClose={() => {
              setViewModal(!viewModal);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Lazeez Bhuna Murgh Biryani</Text>

                {/* Content of the modal */}

                {/* Close Button */}
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setViewModal(!viewModal)}
                >
                  <Text style={styles.textStyle}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <TouchableOpacity
            style={styles.buttonOpen}
            onPress={() => setViewModal(true)}
          >
            <Text style={styles.textStyle}>Show Cart</Text>
          </TouchableOpacity>
        </View>

      </View>

      
    </>
  )
}

export default CartButton