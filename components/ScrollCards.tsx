import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScrollCards = () => {
    return (
        <View>
            <Text style={styles.headerText}>ScrollCards</Text>
            <ScrollView contentContainerStyle={styles.mainContainer} horizontal={true}>
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
        marginHorizontal: 3

    },
    cardElevated: {
        backgroundColor: "rgba(158, 180, 158, 0.77)",
        elevation: 3

    },
    mainContainer: {
        marginTop: 10,
        marginHorizontal: 8,
        flex: 1

    }
})