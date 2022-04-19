import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState,  } from 'react'

export default function Home({ navigation }) {
  const [cities, setCities] = useState(
    [
      {
        name: "Passo Fundo",
        geocode: "4314100"
      },
      {
        name: "Marau",
        geocode: "4311809"
      },
      {
        name: "Carazinho",
        geocode: "4304705"
      },
      {
        name: "Soledade",
        geocode: "4320800"
      },
      {
        name: "Erechim",
        geocode: "4307005"
      },
    ]);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, marginBottom: 20}}>Selecione a cidade que deseja ver a previsão:</Text>
      <FlatList
        data={cities}
        renderItem={({ item }) => {
          return (<CityCard name={item.name} geocode={item.geocode} navigation={navigation} />)
        }}
        keyExtractor={(city) => city.geocode}
      />
      <TouchableOpacity
      style={{
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: '#FE7659',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        padding: 10,
        elevation: 2
      }}
      onPress={() => { navigation.navigate("About") }}
    ><Text>Sobre</Text>
    </TouchableOpacity>
      
    </View>
  );
}

const CityCard = ({ name, geocode, navigation }) => {
  return (
    <TouchableOpacity
      style={{
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: '#C9FB87',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        padding: 10,
        elevation: 2
      }}
      onPress={() => { navigation.navigate("Detail", { name, geocode }) }}
    ><Text>{name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 30
  }
});
