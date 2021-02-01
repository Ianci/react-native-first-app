import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'




export const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
           <View style={{...styles.mealRow, ...styles.mealHeader}}>
           <ImageBackground source={{uri: props.image}}
           style={styles.img}
           />
           <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
           </View>
           <View style={{...styles.mealRow, ...styles.mealDetails}}>
               <Text style={styles.properties}>{props.duration}m</Text>
               <Text style={styles.properties}>{props.complexity}</Text>
               <Text style={styles.properties}>{props.affordability}</Text>
           </View>
        </View>
        </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row',
        backgroundColor: 'black'
    },
    title: {
        fontSize: 20,
        width: '100%',
        height: '20%',
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'black',
        textShadowRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    properties: {
        color: 'white',
        fontWeight: '600'
    },
    mealItem: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        height: 200,
        width: '100%',
        backgroundColor: '#ccc'
    },
    mealHeader: {
        height: '90%'
    },
    mealDetails: {
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    img: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 10,
        top: 2
    }
})