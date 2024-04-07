import React from 'react';
import { Modal, StyleSheet, View, Dimensions, TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native';

import { Entypo } from '@expo/vector-icons';

const screenHeight = Dimensions.get('window').height;

const CustomModal = ({ children, onClose, visible, backgroundColor }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={ backgroundColor ? { ...styles.modalView, backgroundColor: backgroundColor } : styles.modalView}>
                    {children}
                </View>
                <TouchableOpacity
                    style={styles.buttonClose}
                    onPress={onClose}
                >
                    <Entypo name="cross" size={24} style={styles.textStyle} color="black" />
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background
    },
    modalView: {
        height: screenHeight * 0.6, // 30% of screen height
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -2, // shadow coming from the bottom
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        // if you want everything inside the modal to be scrollable, use this:
        // alignItems: 'center',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        alignSelf: 'center', // Center button in the modal
        marginTop: 10, // Extra space from the bottom or other elements
    },
    buttonClose: {
        position: 'absolute',
        right: 15, // Distance from the right edge of the screen
        top: screenHeight - (screenHeight * 0.6) - 50, // Adjust this to move the button up from the modalView
        backgroundColor: 'white', // or any color that fits the design
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        fontSize: 24,
        color: '#000',
        lineHeight: 24,
    },
});

export default CustomModal;
