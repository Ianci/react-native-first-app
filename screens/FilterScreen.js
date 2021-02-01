import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import {HeaderButtonComponent} from '../components/header/HeaderButton'

const FilterSwitch = props => {
    return(

        <View style={styles.container}>
            <Text style={styles.glutenText}>{props.label}</Text>
            <Switch 
            value={props.state} 
            onValueChange={props.onChange}/>
        </View>
    )
    
}
export const FilterScreen = (props) => {
 
    const [isGlutenFree, setisGlutenFree] = useState(false)
    const [isLactoseFree, setisLactoseFree] = useState(false)
    const [isVeggie, setisVeggie] = useState(false)
    const [isVegetarian, setisVegetarian] = useState(false)

    //Save user filters
    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVeggie,
            isVegetarian: isVegetarian
        };
        console.log(appliedFilters)
    }, [isGlutenFree, isLactoseFree, isVeggie, isVegetarian]);

    useEffect(() => {
        props.navigation.navigate('Filter', {
            save: saveFilters
        })
    }, [saveFilters])

    const { save } = props.route.params
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
                <Item
                  title="Save"
                  iconName="ios-save"
                  onPress={save}
                  
                />
              </HeaderButtons>
            )
            })
    }, [])
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Avaible filters</Text>
            <FilterSwitch 
            label="Gluten free"
            state={isGlutenFree}
            onChange={(newValue) => setisGlutenFree(newValue)}
            />

            <FilterSwitch 
            label="Lactose free"
            state={isLactoseFree}
            onChange={(newValue) => setisLactoseFree(newValue)}
            />

            <FilterSwitch 
            label="Vegan"
            state={isVeggie}
            onChange={(newValue) => setisVeggie(newValue)}
            />

            <FilterSwitch 
            label="Vegetarian"
            state={isVegetarian}
            onChange={(newValue) => setisVegetarian(newValue)}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: 22,
        margin: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'orangered'
    },
    glutenText: {
        fontWeight: 'bold'
    }
})