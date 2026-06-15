import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export class FlatList extends Component {
    render() {
        return (
            <View>
                <Text style={styles.headerText}>Flat Cards</Text>
                <View>
                    <View style={styles.cardComponent}>
                        <Text>Red Card</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    headerText: {
        fontSize: 30,
        fontWeight: "bold"
    },
    cardComponent: {
        backgroundColor: "red"
    }
})
export default FlatList