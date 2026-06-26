import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Navigation/Home";
import Login from "./components/Navigation/Login";

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
function App() {
  // const [showData, setShpwData] = useState(false)
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} options={{
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
        }} />
        <Stack.Screen name="login" component={Login} options={{ title: "Login Page" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
