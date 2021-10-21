import React from 'react';
import { StyleSheet, View, Text, Button } from "react-native";
import { Context } from '../Context'

export function ParamTitleScreen({ route, navigation }) {
    const [count, setCount] = React.useState(0);
    React.useLayoutEffect(() => {
        navigation.setOptions({
        headerLeft: () => (
            <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
        ),
        });
    }, [navigation, setCount]);
    return (
      <View style={styles.container}>
          <Text>The title of this screen is a param that was passed in</Text>
          <Text>The title header has custom properties, headerStyle, headerTintColor, headerTitleStyle</Text>
          <Text>Count: {count}</Text>
          <Button title="Update the title" onPress={() => navigation.setOptions({ title: 'Updated!' })}/>
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