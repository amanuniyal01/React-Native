import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'


type DataProps = {
    id: number,
    title: string,
    body: string

}
const ActivityIndicatorPractice = () => {
    const [data, setData] = useState<DataProps[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const loadData = async () => {
        setLoading(true)
        try {
            const data = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20");
            const response = await data.json()
            setData(response)
        }
        catch (error) {

        }
        finally {

            setLoading(false)
        }
    }
    useEffect(() => {
        loadData()
    }, [])
    if (loading) return (
        <View style={styles.centered}>
            <ActivityIndicator size="large" color="rgb(99, 151, 203)" />
        </View>
    )
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={{ color: "white" }}>{item.title}</Text>
                        <Text style={{ color: "white" }}>{item.body}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default ActivityIndicatorPractice

const styles = StyleSheet.create({
    card: {
        backgroundColor: "rgb(99, 151, 203)",
        margin: 8,
        borderRadius: 15,
        padding: 8
    },
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    }
})