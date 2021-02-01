import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const FavoritoScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>FavoritoScreen screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})