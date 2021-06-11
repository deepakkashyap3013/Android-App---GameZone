import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

const ReviewDetail = ({ route }) => {
  const { title, body, rating } = route.params;

  // console.log(images.rating[rating]);

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image
            source={images.ratings[rating]}
            style={{ width: rating * 21, height: 21 }}
          />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});

export default ReviewDetail;
