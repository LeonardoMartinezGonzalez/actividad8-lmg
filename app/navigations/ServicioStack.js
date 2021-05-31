import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Servicio from "../screens/Servicio/Servicio";
import AgregarServicio from "../screens/Servicio/AgregarServicio";
import DetalleServicio from "../screens/Servicio/DetalleServicio";
import EditarServicio from "../screens/Servicio/EditarServicio";
import BorrarServicio from "../screens/Servicio/BorrarServicio";



const Stack = createStackNavigator();

export default function ServicioStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="servicio"
                component={Servicio}
                options={{title: "Servicio de Usuarios de MotoMovil"}}
            />
            <Stack.Screen 
                name="agregar-servicio"
                component={AgregarServicio}
                options={{title: "Agregar Servicio de Usuarios de MotoMovil"}}
            />
              <Stack.Screen 
                name="detalle-servicio"
                component={DetalleServicio}
                options={{title: "Detalle del Servicio de Usuarios de MotoMovil"}}
            />
               <Stack.Screen 
                name="editar-servicio"
                component={EditarServicio}
                options={{title: "Edición del  Servicio de Usuarios de MotoMovil"}}
            />
               <Stack.Screen 
                name="borrar-servicio"
                component={BorrarServicio}
                options={{title: "Borrado del  Servicio de Usuarios de MotoMovil"}}
            />
        </Stack.Navigator>
    );
}