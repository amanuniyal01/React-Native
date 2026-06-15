
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FlatList from "./components/FlatList";

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList />
      </ScrollView>
    </SafeAreaView>

  )
}

export default App;
