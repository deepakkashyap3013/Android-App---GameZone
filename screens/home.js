import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { globalStyles } from "../styles/global";
import { Ionicons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";
import Card from "../shared/card";

const Home = ({ navigation }) => {
  const [modalopen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  // const pressHandler = () => {
  //   navigation.navigate("Details");
  // };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalopen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Ionicons
              name="close"
              size={24}
              color="black"
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm
              setReviews={setReviews}
              curr={reviews}
              setModalOpen={setModalOpen}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Ionicons
        name="add"
        size={24}
        color="black"
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => {
          const { title, rating, body } = item;
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", { ...item })}
            >
              <Card>
                <Text style={globalStyles.titleText}>{title}</Text>
              </Card>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});

export default Home;
