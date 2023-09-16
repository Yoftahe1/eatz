import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
  const navigation = useNavigation();
  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {results.map((element) => {
        return (
          <TouchableOpacity
            key={element.id}
            onPress={() =>
              navigation.navigate("ResultsShow", {
                id: element.id,
                name: element.name,
              })
            }
          >
            <ResultsDetail result={element} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
  },
  container: {
    gap: 10,
  },
});

export default ResultsList;
