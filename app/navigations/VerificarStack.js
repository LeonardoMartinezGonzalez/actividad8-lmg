import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Verificar from "../screens/Verificar";

const Stack = createStackNavigator();

export default function ValidarStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="validar"
                component={Verificar}
                options={{title: "Validación de Usuarios de MotoMovil"}}
            />
        </Stack.Navigator>
    );
}