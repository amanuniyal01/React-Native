import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StatusBarPractice = () => {
    return (
        <View>
            <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold" }}>StatusBarPractice</Text>
            <StatusBar
                barStyle={"dark-content"}
                backgroundColor={"rgba(16, 170, 150, 0.86)"}
            />S
        </View>
    )
}

export default StatusBarPractice

const styles = StyleSheet.create({})