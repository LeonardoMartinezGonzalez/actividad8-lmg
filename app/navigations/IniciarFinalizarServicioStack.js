import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import IniciarFinalizarServicio from "../screens/IniciarFinalizarServicio";

const Stack = createStackNavigator();

export default function IniciarFinalizarServicioStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="iniciarfinalizarservicio"
                component={IniciarFinalizarServicio}
                options={{title: "Iniciar/Finalizar Servicio en MotoMovil"}}
            />
        </Stack.Navigator>
    );
}