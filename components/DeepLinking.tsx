import { Alert, Button, Linking, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'

const supportedUrl = "https://reactnative.dev/docs/next/linking?language=typescript";
const unSupportedUrl = "https://www.youtube.com/watch?v=eL5qYJ7y68k&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c&index=17"
type OpenUrlButtonProps = {
    url: string,
    children: string
}
const OpenUrlButton = ({ url, children }: OpenUrlButtonProps) => {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url)
        if (supported) {
            await Linking.openURL(url)
        }
        else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url])
    return (
        <Button title={children} onPress={handlePress} />
    )

}
const DeepLinking = () => {
    return (
        <View>
            <Text>DeepLinking</Text>
            <OpenUrlButton url={supportedUrl}>Click me to get supported Url</OpenUrlButton>
            <OpenUrlButton url={unSupportedUrl}>Click me to get Unsupported Url</OpenUrlButton>
        </View>
    )
}

export default DeepLinking

const styles = StyleSheet.create({})