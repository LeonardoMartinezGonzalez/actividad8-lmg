import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home/Home";
import IniciarOpcion1 from "../screens/Home/IniciarOpcion1";
import IniciarOpcion2 from "../screens/Home/IniciarOpcion2"

const Stack = createStackNavigator();

export default function HomeStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="home"
                component={Home}
                options={{title: "Menú principal de MotoMovil"}}
            />
            <Stack.Screen 
                name="iniciar-opcion1"
                component={IniciarOpcion1}
                options={{title: "Opcion 1 de MotoMovil"}}
            />
            <Stack.Screen 
                name="iniciar-opcion2"
                component={IniciarOpcion2}
                options={{title: "Opcion 2 de MotoMovil"}}
            />
        </Stack.Navigator>
    );
}