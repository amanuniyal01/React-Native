import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const menuItems = [
    { id: 1, label: 'Home' },
    { id: 2, label: 'About' },
    { id: 3, label: 'Profile' },
    { id: 4, label: 'Settings' },
    { id: 5, label: 'Contact' },
]
type Props = {
    sidebar: boolean,
    setsidebar: (val: boolean) => void
}
const Sidebar = ({ sidebar, setsidebar }: Props) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setsidebar(false)}>
                <Text style={{ color: "red", fontWeight: "bold", fontSize: 17 }}>
                    X
                </Text>
            </TouchableOpacity>
            {menuItems.map((item) => (
                <TouchableOpacity key={item.id} style={styles.item}>
                    <Text style={styles.label}>{item.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default Sidebar

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 60,
        backgroundColor: '#fff',
        position: "absolute",
        right: 2,
        top: 10,
        borderRadius: 5

    },
    item: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    label: {
        fontSize: 16,
        color: '#333',
    }
})