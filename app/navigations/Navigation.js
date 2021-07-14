import React,{useEfect,useState} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AgregarPacientesStack from "./AgregarPacientesStack";
import MisPacientesStack from "./MisPacientesStack";
import AccountStack from "./AccountStack";
import {Icon} from "react-native-elements";



const Tab = createBottomTabNavigator();

export default function Navigation(){
    
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName="account"
            tabBarOptions={{
                inactiveTinColor:"#646464",
                activeTinColor:"#00A680"
            }}
            screenOptions={({route})=>({
                tabBarIcon: ({color}) => screenOptions(route,color),
            })}
            >   
                
                <Tab.Screen 
                    name="misPacientes" 
                    component={MisPacientesStack} 
                    options={{title:"Mis Pacientes", headerLeft:null}} />
                <Tab.Screen 
                    name="agregarPacientes" 
                    component={AgregarPacientesStack} 
                    options={{title:"Agregar Pacientes"}}
                 />
                 <Tab.Screen 
                    name="account" 
                    component={AccountStack} 
                    options={{title:"Mi Cuenta"}} />
            </Tab.Navigator>

        </NavigationContainer>

    );
    
}



function screenOptions(route,color) {
    let iconName;

    switch (route.name) {
        case "agregarPacientes":
            iconName="file-plus"
            break;
        case "misPacientes":
            iconName="magnify"
            break;
        case "account":
                iconName="account"
                break;
        default:
            break;
    }

    return (
        <Icon type="material-community" name={iconName} size={22} color={color} />

    );

}   