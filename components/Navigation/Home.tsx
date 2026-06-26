import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../type'
type NavigationProp = NativeStackNavigationProp<RootStackParamList>
const Home = () => {
    const navigation = useNavigation<NavigationProp>()
    return (
        <View style={styles.container}>
            <Text>
                Home Screen
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
                <Text style={styles.btn}>Route me to Login</Text>
            </TouchableOpacity>
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