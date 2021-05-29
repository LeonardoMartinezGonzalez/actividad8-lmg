import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import IniciarFinalizarServicio from "../screens/IniciarFinalizarServicio/IniciarFinalizarServicio";
import IniciarServicio from "../screens/IniciarFinalizarServicio/IniciarServicio";
import FinalizarServicio from "../screens/IniciarFinalizarServicio/FinalizarServicio";

const Stack = createStackNavigator();

export default function IniciarFinalizarServicioStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="iniciarfinalizarservicio"
                component={IniciarFinalizarServicio}
                options={{title: "Iniciar/Finalizar Servicio en MotoMovil"}}
            />
             <Stack.Screen 
                name="iniciar-servicio"
                component={IniciarServicio}
                options={{title: "Iniciar"}}
            />
             <Stack.Screen 
                name="finalizar-servicio"
                component={FinalizarServicio}
                options={{title: "Finalizar"}}
            />
        </Stack.Navigator>
    );
}