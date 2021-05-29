import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Registro from "../screens/Registro/Registro";
import RegistroConductor from "../screens/Registro/RegistroConductor";
import RegistroUsuario from "../screens/Registro/RegistroUsuario";

const Stack = createStackNavigator();

export default function RegistroStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="registro"
                component={Registro}
                options={{title: "Registro de Usuarios de MotoMovil"}}
            />
            <Stack.Screen 
                name="registro-usuario"
                component={RegistroUsuario}
                options={{title: "Registro de Usuarios"}}
            />
            <Stack.Screen 
                name="registro-conductor"
                component={RegistroConductor}
                options={{title: "Registro de Conductores"}}
            />
        </Stack.Navigator>
    );
}