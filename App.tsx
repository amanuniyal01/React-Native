import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Navigation/Home";
import Login from "./components/Navigation/Login";
import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
const Stack = createNativeStackNavigator()
function App() {
  // const [showData, setShpwData] = useState(false)
  const [bgColor, setBgColor] = useState(false)
  const handleBackground = () => {
    setBgColor((prev) => !prev)
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" options={{
          headerLeft: () => {
            return (
              <View >
                <TouchableOpacity onPress={handleBackground} style={{ backgroundColor: "red", padding: 10, borderRadius: 10 }}>
                  <Text style={{ color: "white", fontWeight: "bold" }}>Change Color</Text>
                </TouchableOpacity>
              </View>
            )
          },
          title: "Home Screen",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: "bold",

          },
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "rgba(33, 159, 166, 0.58)"
          },
          animation: "slide_from_right"
        }} >
          {() => <Home bgColor={bgColor} />}
        </Stack.Screen>
        <Stack.Screen name="login" component={Login} options={{ title: "Login Page" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
