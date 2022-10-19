import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, StatusBar } from "react-native";

const ModalScreen = () => {
    const hidden = true;
    const [modalVisible, setModalVisible] = useState(false);
    return (
    <View style={styles.centeredView}>
     <StatusBar hidden={hidden}/>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Modal Alert</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    justifyContent: 'center',
    width:'75%',
    height: 60,

    borderRadius: 30,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "black",
  },
  buttonClose: {
    backgroundColor: "black",
  },
  textStyle: {
    color: "gray",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontSize: 25,
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ModalScreen;