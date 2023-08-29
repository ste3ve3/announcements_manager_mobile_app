import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, TextInput, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../theme';
import { Link } from 'expo-router';

const PopupModal = ({ modalVisible, setModalVisible }) => {
  const [searchValue, setSearchValue] = useState("")
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
          <TouchableWithoutFeedback onPress={() => {
          setModalVisible(false);
        }}>
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TextInput
              style={styles.input}
              placeholder="Search for an announcement..." 
              inputMode="text"
              value={searchValue}
              textAlignVertical="top"
              onChangeText={(value) => setSearchValue(value)}
          />
          {searchValue.trim() === "" ? (
            <View style={[styles.createButton, styles.disabledButton]}>
              <Text style={styles.buttonText}>Search</Text>
              <AntDesign name="search1" size={24} color="white" />
            </View>
          ) : (
            <TouchableOpacity style={styles.groupContainer} onPress={() => setSearchValue("")}>
              <Link href={`search/${searchValue.trim()}`}>
                <View style={styles.createButton}>
                  <Text style={styles.buttonText}>Search</Text>
                  <AntDesign name="search1" size={24} color="white" />
                </View>
              </Link>
            </TouchableOpacity>
          )}
        </View>
        </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 50,
  },
  modalView: {
    margin: 15,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input : {
      backgroundColor: COLORS.white,
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 10,
      width: "100%"
  },
  inputLabel : {
      color: COLORS.secondary,
      fontSize: 15,
      paddingBottom: 5,
      fontWeight: "semibold"
  },
  createButton: {
      backgroundColor: COLORS.secondary,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 10,
      marginTop: 20,
      marginHorizontal: 15,
      gap: 10,
      alignSelf: "flex-end",
  },
  groupContainer: { 
    flexDirection: 'row', 
    alignItems: 'center',
    alignSelf: "flex-end", 
    marginTop: 20,
  },
  disabledButton: {
    opacity: 0.5
  },
  buttonText : {
      color: COLORS.white,
      fontSize: SIZES.medium
  }
});

export default PopupModal;