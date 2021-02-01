import React from 'react'
import { View, Text, StyleSheet, Button, FlatList, Touchable, TouchableOpacity } from 'react-native'
import { CategoryGrid } from '../components/category/CategoryGrid';

import { CATEGORIES } from '../data/MealsData';



export const Categories = (props) => {
   
    const renderGridItem = (itemData) => {
        return <CategoryGrid 
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() =>
                    props.navigation.navigate('Meals', {
                        categoryId: itemData.item.id
                    })
                    
                }
        /> 
            
    }

    return (
       <>
       <FlatList 
       data={CATEGORIES}
       renderItem={renderGridItem}
       numColumns={2}
       style={styles.flat}
       />
       <Button title="filter" onPress={()=> props.navigation.navigate('Filter')}/>
       </>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flat: {
        margin: 10
    },
   
})