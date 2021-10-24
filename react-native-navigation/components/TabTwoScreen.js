import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";

export function TabTwoScreen() {
    return (
        <View style={styles.container}>
            <Text>Hello from Tab Two</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c3c3c3',
        fontSize: 12
    }
});