import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const data = [
    {
        id: 1,
        Name: "Aman Uniyal",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXko-aLk3K8EUQqCbkYamXmkl1jNh58_dDrxvnyfCu0qLOAnoxgYNePqU&s"
    },
    {
        id: 2,
        Name: "Aman Uniyal",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXko-aLk3K8EUQqCbkYamXmkl1jNh58_dDrxvnyfCu0qLOAnoxgYNePqU&s"
    },
    {
        id: 3,
        Name: "Aman Uniyal",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXko-aLk3K8EUQqCbkYamXmkl1jNh58_dDrxvnyfCu0qLOAnoxgYNePqU&s"
    },
    {
        id: 4,
        Name: "Aman Uniyal",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXko-aLk3K8EUQqCbkYamXmkl1jNh58_dDrxvnyfCu0qLOAnoxgYNePqU&s"
    },
    {
        id: 5,
        Name: "Aman Uniyal",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXko-aLk3K8EUQqCbkYamXmkl1jNh58_dDrxvnyfCu0qLOAnoxgYNePqU&s"
    },
    {
        id: 6,
        Name: "Aman Uniyal",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXko-aLk3K8EUQqCbkYamXmkl1jNh58_dDrxvnyfCu0qLOAnoxgYNePqU&s"
    },
]
const Gallery = () => {
    return (
        <View style={{
            alignItems: "center",
            justifyContent: "center", flex: 1
        }}>
            <Text style={styles.headerText}>Gallery</Text>
            <View style={styles.cardContainer}>
                {data.map((item) => (
                    <View style={styles.card} key={item.id}>
                        <Image style={styles.cardImage} source={{ uri: item.imageUrl }} />
                        <Text style={styles.name}>{item.Name}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default Gallery

const styles = StyleSheet.create({
    headerText: {
        fontSize: 30,
        fontWeight: "bold",
        paddingHorizontal: 10
    },
    cardContainer: {
        flex: 1,
        gap: 30,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",

    },
    card: {
        width: 180,
        height: 200,
        borderRadius: 7,
        boxShadow: "2 4 8 rgba(0,0,0,0.4)",
    },
    cardImage: {
        borderRadius: 7,
        height: "100%",
        width: "100%",
        overflow: "hidden"
    },
    name: {
        position: "absolute",
        bottom: 10,
        fontWeight: "bold",
        color: "white"
    }
})