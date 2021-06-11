import React from "react";
import { Button, TextInput, View, Text, StyleSheet, Alert } from "react-native";
import { globalStyles } from "../styles/global.js";
import { Formik } from "formik";
import * as yup from "yup";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number 1 - 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

const ReviewForm = ({ setReviews, curr, setModalOpen }) => {
  return (
    <View>
      <Text style={{ ...globalStyles.titleText, ...styles.title }}>
        Add A Review
      </Text>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values) => {
          if (values) {
            setReviews([
              { ...values, key: new Date().getTime.toString() },
              ...curr,
            ]);
            setModalOpen(false);
          } else {
            Alert.alert("Oops", "Please add the value of all the Field", [
              { text: "Got It" },
            ]);
          }
        }}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          handleBlur,
        }) => {
          return (
            <View style={globalStyles.submitBtn}>
              <TextInput
                style={globalStyles.input}
                placeholder="Review title"
                onChangeText={handleChange("title")}
                value={values.title}
                onBlur={handleBlur("title")}
              />
              <Text style={globalStyles.errorText}>
                {touched.title && errors.title}
              </Text>
              <TextInput
                style={globalStyles.input}
                multiline
                placeholder="Review details"
                onChangeText={handleChange("body")}
                value={values.body}
                onBlur={handleBlur("body")}
              />
              <Text style={globalStyles.errorText}>
                {touched.body && errors.body}
              </Text>
              <TextInput
                style={globalStyles.input}
                placeholder="Rating (1 - 5)"
                onChangeText={handleChange("rating")}
                value={values.rating}
                keyboardType="numeric"
                onBlur={handleBlur("rating")}
              />
              <Text style={globalStyles.errorText}>
                {touched.rating && errors.rating}
              </Text>
              <Button
                color="maroon"
                title="Submit"
                onPress={handleSubmit}
                style={globalStyles.submitBtn}
              />
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    marginVertical: 20,
  },
});

export default ReviewForm;
