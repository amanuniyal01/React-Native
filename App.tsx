import { NavigationContainer } from "@react-navigation/native"
import { Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "./type";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./components/Navigation/Login";
import Home from "./components/Navigation/Home";

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
const Tab = createBottomTabNavigator<RootStackParamList>()
function App() {

  return (
    // Stack Navigation..
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="home" options={{
    //       headerLeft: () => {
    //         return (
    //           <View >
    //             <TouchableOpacity onPress={handleBackground} style={{ backgroundColor: "red", padding: 10, borderRadius: 10 }}>
    //               <Text style={{ color: "white", fontWeight: "bold" }}>Change Color</Text>
    //             </TouchableOpacity>
    //           </View>
    //         )
    //       },
    //       headerRight: () => {
    //         return (
    //           <TouchableOpacity onPress={() => setIsSideBar(!isSidebar)} style={{ backgroundColor: "rgba(13, 105, 198, 0.73)", padding: 10, borderRadius: 10 }}>
    //             <Text style={{ color: "white", fontWeight: "bold" }}>
    //               Open Sidebar
    //             </Text >
    //           </TouchableOpacity>
    //         )
    //       },
    //       title: "Home Screen",
    //       headerTitleStyle: {
    //         fontSize: 30,
    //         fontWeight: "bold",

    //       },
    //       headerTintColor: "white",
    //       headerStyle: {
    //         backgroundColor: "rgba(33, 159, 166, 0.58)"
    //       },
    //       animation: "slide_from_right"
    //     }} >
    //       {() => <Home bgColor={bgColor} />}
    //     </Stack.Screen>
    //     <Stack.Screen name="login" component={Login} options={{ title: "Login Page" }} />
    //   </Stack.Navigator >
    //   {isSidebar && < Sidebar sidebar={isSidebar} setsidebar={setIsSideBar} />}
    // </NavigationContainer >

    // Tab Navigation
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="login" component={Login} />
        <Tab.Screen name="home" component={Home} />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;
