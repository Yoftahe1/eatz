import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
const Stack = createStackNavigator();

export default function App() {
  return (
    
      
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="EATZ"
            component={HomeScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Search")} style={{marginRight:15}}>
                  <FontAwesome name="search" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen
            name="ResultsShow"
            component={ResultsShowScreen}
            // options={({ route }) => ({ title: route.params.name })}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}
