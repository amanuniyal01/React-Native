import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class ImageCard extends Component {
    render() {
        return (
            <View>
                <Text style={styles.headerText}>ImageCard</Text>
                <View style={styles.container}>
                    <View >
                        <Image style={styles.cardImage} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeYR8ahKPHgbDasK2AuiXZecQ2XIh_xyZTg&s" }} />
                    </View>

                    <View>
                        <Text style={styles.cardTitle} >Taj Mahal</Text>
                        <Text style={styles.cardlabel}>Taj Mahal , Situated in Agra.</Text>
                        <Text style={styles.cardDescription}>Taj Mahal , Situated in Agra.It was built by Mughals, Shah Jahan. Right Now its
                            one of the most popular tourist place of india. Foreigners loves to visit here and Enjoys a lot.
                        </Text>
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
    container: {
        marginVertical: 13,
        flex: 1,
        // paddingHorizontal: 10
    },
    cardImage: {
        height: 100,
        marginHorizontal: 12
    },
    cardTitle: {
        fontSize: 30,
        fontWeight: "bold",


    },
    cardlabel: {
        fontSize: 24,
        fontWeight: "semibold"

    },
    cardDescription: {
        fontSize: 18,


    }
})