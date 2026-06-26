import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RouteProp, useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../type'
type NavigationProp = NativeStackNavigationProp<RootStackParamList>
type LoginRouteProp = RouteProp<RootStackParamList, "login">;
type Props = {
    route: LoginRouteProp;
};
const Login = ({ route }: Props) => {
    const navigation = useNavigation<NavigationProp>()

    const { name, gender, fName } = route.params || {}
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("home")}>
                <Text style={styles.btn}>Route me to Home</Text>
                <Text style={{ fontSize: 40, fontWeight: "bold" }}>{name}</Text>
                <Text style={{ fontSize: 40, fontWeight: "bold" }}>{gender}</Text>
                <Text style={{ fontSize: 40, fontWeight: "bold" }}>{fName}</Text>
            </TouchableOpacity>
        </View >
    )
}

export default Login

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "rgb(198, 26, 34)",
        color: "white",
        maxWidth: 100,
        padding: 10,
        borderRadius: 12
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 20
    }
})