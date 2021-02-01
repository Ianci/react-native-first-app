import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons';


export const HeaderButtonComponent = (props) => {
    
    return (
        <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color="white" />
            
        
    )
}
