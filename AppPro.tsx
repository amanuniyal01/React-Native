import React from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";

const AppPro = (): React.JSX.Element => {
    const theme = useColorScheme();
    const isDark = theme === "dark";

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: isDark ? "#000" : "#fff" },
            ]}
        >
            <Text
                style={[
                    styles.Title,
                    { color: isDark ? "#fff" : "#000" },
                ]}
            >
                Hello Guys
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    Title: {
        fontWeight: "bold",
        fontSize: 34,
    },
});

export default AppPro;