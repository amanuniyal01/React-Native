
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FlatList from "./components/FlatList";
import ScrollCards from "./components/ScrollCards";
import ImageCard from "./components/ImageCard";
// import DeepLinking from "./components/DeepLinking";
import TouchableOpacityDemo from "./components/TouchableOpacityDemo";
import Gallery from "./components/Gallery";
import ChipsInput from "./components/ChipsInput/ChipsInput";
import ActivityIndicator from "./components/ActivityIndicator/ActivityIndicator";
import ActivityIndicatorPractice from "./components/ActivityIndicator/ActivityIndicator";
import { useState } from "react";

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
function App() {
  const [showData, setShpwData] = useState(false)
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <FlatList />
        <ScrollCards />
        <ImageCard />
        <DeepLinking />
        <TouchableOpacityDemo />
        <Gallery /> */}
        {/* <ChipsInput /> */}
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", }}>
          <TouchableOpacity
            onPress={() => setShpwData(true)}>
            <Text style={{ backgroundColor: "blue", color: "white", padding: 10 }}>Load Data</Text>
          </TouchableOpacity>
        </View>
        {showData && <ActivityIndicatorPractice />}
      </ScrollView>
    </SafeAreaView>

  )
}

export default App;
