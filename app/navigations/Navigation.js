import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import Home from "./HomeStack";
import Registro from "./RegistroStack";
import Servicio from "./ServicioStack";
import IniciarFinalizarServicio from "./IniciarFinalizarServicioStack";


const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
        <Tab.Navigator
          initialRouteName="home"
          tabBarOptions={{
            inactiveTintColor: "#646464",
            activeTintColor: "#00a680"
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => screenOptions(route, color)
          })}
        >
            <Tab.Screen
              name="home"
              component={Home}
              options={{ title: "Inicio" }}
            />
            <Tab.Screen
              name="registro"
              component={Registro}
              options={{ title: "Registro de Usuarios" }}
            />
            <Tab.Screen
              name="servicio"
              component={Servicio}
              options={{ title: "Servicio de  Usuario" }}
            />
            <Tab.Screen
              name="iniciarfinalizarservicio"
              component={IniciarFinalizarServicio}
              options={{ title: "Iniciar o Terminar el Servicio en MotoMovil" }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      );
}

function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "verificar":
      iconName = "account";
      break;
    case "home":
      iconName = "account-group";
      break;
    case "inicializarfinalizarservicio":
      iconName = "account-check";
      break;
    case "registro":
      iconName = "book";
      break;
    /* case "promedios":
      iconName = "chart-bar";
      break; */
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}