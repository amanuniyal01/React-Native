import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Sidebar = () => {
    return (
        <View>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Profile</li>
                <li>Settings</li>
                <li>Contact</li>
            </ul>
        </View>
    )
}

export default Sidebar

const styles = StyleSheet.create({})