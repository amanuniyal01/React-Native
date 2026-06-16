
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FlatList from "./components/FlatList";
import ScrollCards from "./components/ScrollCards";
import ImageCard from "./components/ImageCard";
import DeepLinking from "./components/DeepLinking";

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
        <ScrollCards />
        <ImageCard />
        <DeepLinking />
      </ScrollView>
    </SafeAreaView>

  )
}

export default App;
