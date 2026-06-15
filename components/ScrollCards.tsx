import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScrollCards = () => {
    return (
        <View>
            <Text style={styles.headerText}>ScrollCards</Text>
            <ScrollView horizontal={true} style={styles.mainContainer}>
                <View style={[styles.cardComponent, styles.cardElevated]}>
                    <Text>Tap Me</Text>
                </View>
                <View style={[styles.cardComponent, styles.cardElevated]}>
                    <Text>Tap Me</Text>
                </View>
                <View style={[styles.cardComponent, styles.cardElevated]}>
                    <Text>Tap Me</Text>
                </View>
                <View style={[styles.cardComponent, styles.cardElevated]}>
                    <Text>Tap Me</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default ScrollCards

const styles = StyleSheet.create({
    headerText: {
        fontSize: 30,
        fontWeight: "bold"
    },
    cardComponent: {
        alignItems: "center",
        justifyContent: "center",
        width: 120,
        height: 120,
        borderRadius: 12,

    },
    cardElevated: {
        backgroundColor: "rgba(158, 180, 158, 0.77)",
        margin: 5,
        elevation: 3

    },
    mainContainer: {
        marginTop: 10,
        flex: 1,
        flexDirection: "row",
        marginInline: 8,
    }
})