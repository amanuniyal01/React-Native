import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class ImageCard extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.headerText}>ImageCard</Text>
                <View style={styles.container}>
                    <View style={styles.imageWrapper} >
                        <Image style={styles.cardImage} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeYR8ahKPHgbDasK2AuiXZecQ2XIh_xyZTg&s" }} />
                    </View>

                    <View style={styles.cardBody}>
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
        marginVertical: 12,
        borderRadius: 12,
        backgroundColor: "#f2f2f292",
        elevation: 6,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        overflow: "hidden"
    },
    cardImage: {
        height: 200,
        width: "100%",
        marginBottom: 12,
    },
    cardBody: {
        flexGrow: 1,
        flex: 1,
        paddingHorizontal: 13
    },
    cardTitle: {
        fontSize: 30,
        fontWeight: "700",
        marginBottom: 6
    },
    mainContainer: {
        padding: 9
    },
    cardlabel: {
        fontSize: 20,
        fontWeight: "500",
        color: "#666",
        marginBottom: 6
    },
    cardDescription: {
        fontSize: 18,
        color: "#444",
        lineHeight: 20
    },
    imageWrapper: {

    }
})