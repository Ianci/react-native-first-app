import React, { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import { HeaderButtonComponent } from '../components/header/HeaderButton';
import { MEALS } from '../data/MealsData'

export const MealDetails = (props) => {

    const { mealId } = props.route.params;
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    
    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: selectedMeal.title,
            headerRight:()=> ( <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
           
            <Item title="Favorite" iconName="ios-star" onPress={() => alert('This is a button!')}/>
        </HeaderButtons> )
        })
     }, [selectedMeal.title, props.navigation])

     
    return (
        <View style={styles.screen}>
           
            <Text>{selectedMeal.title}</Text>
            <View>
                <Text>Ingredients: {selectedMeal.ingredients}</Text>
            </View>
           
            <Text>{selectedMeal.steps}</Text>
            <Button onPress={() => props.navigation.goBack()} title="Go back"/>
        </View>
    )
}

MealDetails.navigationOptions = navigationData => {
    return {
      
    }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})