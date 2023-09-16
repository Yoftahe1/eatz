import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import Carousel from "react-native-reanimated-carousel";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const HomeScreen = ({navigation}) => {
  const [searchApi, results, errorMessage] = useResults();
  useEffect(() => {
    searchApi("pasta");
  }, []);
  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };
  const width = Dimensions.get("window").width;

  return (
    <>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <Text style={styles.title}>Big Spender</Text>
        <Carousel
          loop={false}
          width={width}
          height={400}
          style={styles.carousel}
          mode="parallax"
          data={filterResultsByPrice("$$$")}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ResultsShow", {
                    id: item.id,
                    name: item.name,
                  })
                }
              >
                <Image style={styles.image} source={{ uri: item.image_url }} />
                <View style={styles.container}>
                  <View style={styles.text}>
                    <FontAwesome name="phone" size={24} color="green" />
                    <Text>{item.phone}</Text>
                  </View>
                  <View style={styles.text}>
                    <AntDesign name="star" size={24} color="#F97B22" />
                    <Text>{item.rating}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        {/* <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        /> */}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    textAlign: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  image: {
    height: 400,
    borderRadius: 20,
  },
  text: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
});

export default HomeScreen;
