import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

export const CategoryGrid = (props) => {
    return (
        <TouchableOpacity 
        onPress={props.onSelect}
        style={styles.item}
        >
        <View style={{...styles.container, ...{backgroundColor: props.color}}}>
            <Text style={styles.itemText}>{props.title}</Text>
        </View>
        </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0 , height: 2},
        shadowRadius: 10,
        elevation: 5,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    item: {
        flex: 1,
        height: 150,
        margin: 10
    },
    itemText: {
       fontSize: 15,
       textAlign: 'center',
       fontWeight: 'bold',
       color: '#FFFFFF'
    }
})

