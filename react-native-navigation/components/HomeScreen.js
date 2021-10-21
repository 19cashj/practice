import React from 'react';
import { StyleSheet, View, Button, Text } from "react-native";
import { Context } from '../Context'

export function HomeScreen({ route, navigation }) {
    const { initialParam, post } = route.params;
    return (
      <View style={styles.container}>
          <Button title="Go to About" onPress={() => navigation.navigate('About', {itemId: 86, otherParam: 'anything you want here',})} />
          <Button title="Go to Post" onPress={() => navigation.navigate('Post')} />
          <Button title="Go to Param Title" onPress={() => navigation.navigate('ParamTitle', { name: 'The title is a param' })} />
          <Text>Initial Parameter: {JSON.stringify(initialParam)}</Text>
          <Text>Passed Parameter: {JSON.stringify(post)}</Text>
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