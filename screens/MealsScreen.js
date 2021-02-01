import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { MealItem } from '../components/meals/MealItem'
import { CATEGORIES, MEALS } from '../data/MealsData'


export const MealsScreen = (props) => {

    const { categoryId } = props.route.params;
    
    const renderMealItem = itemData => {
        return <MealItem title={itemData.item.title}
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        image={itemData.item.imageUrl}
         onSelectMeal={() => {
             props.navigation.navigate('Meals details', {
                mealId: itemData.item.id
             })
         }}
        />
    }

    const selectedCategory = CATEGORIES.find(item => item.id === categoryId);
    //Si lo cumple sabemos que tiene la categoryId
    const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);


    useEffect(() => {
        props.navigation.setOptions({
            title: selectedCategory.title
        })
     }, [selectedCategory.title])

    return (
        <View style={styles.screen}>
           <FlatList 
           data={displayMeals}
           renderItem={renderMealItem}
           style={{width: '100%'}}
           />
            <Button title="Go back" onPress={() => props.navigation.goBack()} />
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