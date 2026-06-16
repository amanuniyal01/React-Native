import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const TouchableOpacityDemo = () => {
    const [visible, setVisible] = useState<boolean>(false)
    return (
        <View>
            <Text style={styles.headerText}>Touchable Opacity</Text>
            <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onLongPress={() => Alert.alert("Long Press")} onPress={() => setVisible(!visible)} activeOpacity={0.5} style={styles.buttonstyle}>
                    <Text style={{ color: "white" }}> {visible ? "Not Visible" : "Visible"}</Text>
                </TouchableOpacity>
                {visible && <Text style={{ color: "red", fontWeight: "bold", fontSize: 23 }}>
                    Hey ! I am Visible
                </Text>}
            </View>
        </View>
    )
}

export default TouchableOpacityDemo

const styles = StyleSheet.create({
    headerText: {
        fontSize: 30,
        fontWeight: "bold",
        paddingHorizontal: 10
    },
    buttonstyle: {
        backgroundColor: "rgba(246, 8, 8, 0.83)",
        borderRadius: 6,
        width: 250,
        paddingBlock: 20,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 12
    }
})
