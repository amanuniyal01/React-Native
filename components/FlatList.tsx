import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export class FlatList extends Component {
    render() {
        return (
            <View>
                <Text style={styles.headerText}>Flat Cards</Text>
                <View style={styles.mainContainer}>
                    <View style={[styles.cardComponent, styles.cardOne]}>
                        <Text>Red </Text>
                    </View>
                    <View style={[styles.cardComponent, styles.cardTwo]}>
                        <Text>Green </Text>
                    </View>
                    <View style={[styles.cardComponent, styles.cardThree]}>
                        <Text>Blue </Text>
                    </View>
                    <View style={[styles.cardComponent, styles.cardFour]}>
                        <Text>Purple </Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    headerText: {
        fontSize: 30,
        fontWeight: "bold",
        paddingHorizontal: 10
    },
    mainContainer: {
        marginVertical: 13,
        flex: 1,
        flexDirection: "row",
        marginInline: 8,
        gap: 20
    },
    cardComponent: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        width: 120,
        height: 120,
        borderRadius: 9,

    },
    cardOne: {
        backgroundColor: "rgba(227, 7, 44, 0.79)",
    },
    cardTwo: {
        backgroundColor: "rgba(3, 237, 186, 0.67)",
    },
    cardThree: {
        backgroundColor: "rgba(9, 99, 147, 0.58)",
    },
    cardFour: {
        backgroundColor: "rgba(126, 20, 180, 0.83)",
    },
})
export default FlatList