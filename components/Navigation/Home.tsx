import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../type'
type NavigationProp = NativeStackNavigationProp<RootStackParamList>
type Props = {
    bgColor: boolean
}
const Home = ({ bgColor }: Props) => {
    const navigation = useNavigation<NavigationProp>()
    const [fName, setFName] = useState<string>("")
    const name = "Aman Uniyal";
    const gender = "Male"
    return (
        <View style={[styles.container, { backgroundColor: bgColor ? "red" : "rgba(34, 166, 166, 0.7)" }]}>
            <Text>
                Home Screen
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('login', {
                name, gender, fName
            })}>
                <Text style={styles.btn}>Route me to Login</Text>
            </TouchableOpacity>
            <TextInput onChangeText={(text) => setFName(text)} style={{
                borderRadius: 10,
                borderColor: "black",
                borderWidth: 4,
                paddingHorizontal: 15
            }} placeholder='Enter your Name' />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 20
    },
    btn: {
        backgroundColor: "rgb(198, 26, 34)",
        color: "white",
        maxWidth: 100,
        padding: 10,
        borderRadius: 12
    }
})