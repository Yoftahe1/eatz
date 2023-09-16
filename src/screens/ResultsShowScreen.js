import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import yelp from "../api/yelp";
import Carousel from "react-native-reanimated-carousel";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
const ResultsShowScreen = ({ route, navigation }) => {
  const [result, setResult] = useState(null);
  const [reviews, setReviews] = useState([]);

  const id = route.params.id;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
    const peopleReviews = await yelp.get(`/${id}/reviews`);
    setReviews(peopleReviews.data.reviews);
  };
  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }
  const width = Dimensions.get("window").width;
  return (
    <View style={styles.screen}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.pop();
        }}
      >
        <Ionicons name="chevron-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <ScrollView>
        <Carousel
          loop
          width={width}
          height={400}
          style={styles.carousel}
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
        />
        <View style={styles.container}>
          <Text style={styles.title}>{result.name}</Text>
          <View style={styles.info}>
            <MaterialIcons name="location-pin" size={24} color="red" />
            <Text>{result.location.display_address.join(",")}</Text>
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.info}>
              <FontAwesome name="phone" size={24} color="green" />
              <Text>{result.phone}</Text>
            </View>
            <View style={styles.info}>
              <AntDesign name="star" size={24} color="#F97B22" />
              <Text>{result.rating}</Text>
            </View>
          </View>
          <Text>Reviews</Text>

          {reviews.map((element) => {
            return (
              <View key={element.id} style={styles.review}>
                <Image
                  style={styles.proPic}
                  source={{ uri: element.user.image_url }}
                />

                <View style={{ flexShrink: 1 }}>
                  <Text style={styles.name}>{element.user.name}</Text>
                  <Text style={styles.reviewText}>{element.text}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    height: 400,
  },
  proPic: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  name: {
    fontWeight: "bold",
  },
  review: {
    flexDirection: "row",
    gap: 5,
    padding: 5,
  },
  reviewText: {
    fontSize: 11,
    color: "grey",
  },
  container: {
    padding: 15,

  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "white",
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    position: "absolute",
    top: 40,
    left: 15,
    zIndex: 1,
  },
});

export default ResultsShowScreen;
