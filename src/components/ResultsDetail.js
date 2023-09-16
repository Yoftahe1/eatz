import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <View>
        <Text style={styles.name} ellipsizeMode="tail" numberOfLines={1}>
          {result.name}
        </Text>
        <View style={styles.text}>
          <FontAwesome name="phone" size={24} color="green" />
          <Text>{result.phone}</Text>
        </View>
        <View style={styles.text}>
          <AntDesign name="star" size={24} color="#F97B22" />
          <Text>{result.rating}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    overflow: "hidden",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 7,
  },
  name: {
    fontWeight: "bold",
  },
  text: {
    flexDirection: "row",
    gap: 5,
    alignItems:"center",
  },
});

export default ResultsDetail;
