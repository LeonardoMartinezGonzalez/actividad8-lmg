import React from 'react';
import { Image, StyleSheet, View, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, ListItem, Icon } from "react-native-elements";

export default function Servicio() {
    const navigation = useNavigation();
    return (

        <ScrollView centerContent={true} styles={styles.viewBody}>
            <Text style={styles.textTitle}>Servicios realizados</Text>


            <View style={styles.viewBtn}>
            {/* source={require('./../../../assets/alumnos1.png')} */}
            {/* source={{ uri: 'https://picsum.photos/200/300' }} */}
            {/* source={{ uri: 'https://source.unsplash.com/daily' }} */}
            <Image
                style={styles.photo}
                source={{ uri: 'https://source.unsplash.com/featured/?{product}' }}
            />

            {list.map((item, i) => (
                <ListItem key={i} bottomDivider>
                    <Icon name={item.icon} type="material-community" />
                    <ListItem.Content>
                      <ListItem.Title>{item.title}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                  </ListItem>
                ))}

                <Button 
                    title="Agregar servicio"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("agregar-servicio")}
                />
                <Button 
                    title="Detalle del servicio"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("detalle-servicio")}
                />

                <Button 
                    title="Editar servicio"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("editar-servicio")}
                />
                <Button 
                    title="Borrar servicio"
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    onPress={() => navigation.navigate("borrar-servicio")}
                />
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    viewBody: {
      marginLeft: 30,
      marginRight: 30
    },
    textTitle: {
      marginTop: 20,
      marginBottom: 20,
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    },
    btnStyle: {
      backgroundColor: "#00a680"
    },
    btnContainer: {
      width: "70%",
      marginBottom: 5,
      marginTop: 5
    },
    viewBtn: {
      flex: 6,
      alignItems: "center",
    },
    photo: {
        height: 180,
        width: 180,
        marginBottom: 20,
        marginTop: 20
      }
  });

  const list = [
    {
      title: "Servicio 1",
      icon: "basket"
    },
    {
      title: "Servicio 2",
      icon: "basketball"
    },
    {
      title: "Servicio 3",
      icon: "car-electric"
    },
    {
      title: "Servicio 4",
      icon: "cellphone"
    }
  ];
