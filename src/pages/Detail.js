import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import axios from 'axios';

export default function Result(props) {
    const [previsao, setPrevisao] = useState(null);
    const { name, geocode } = props.route.params
    useLayoutEffect(() => {
        getCityClima(geocode).then((res) => {
            setPrevisao(res);
        })
    }, [])

    if (previsao) {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={{fontSize: 30, marginBottom: 10, alignSelf: 'center'}}>{name}</Text>
                <View style={styles.containerItem}>
                    {
                        Object.keys(previsao).map((date, i) => {
                            if (i > 1) return;
                            return (
                                <View key={i}>
                                    <Text style={{ fontWeight: '700', fontSize: 25 }}>{date}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                        {
                                            Object.keys(previsao[date]).map((time, childi) => (
                                                <View key={'turn' + childi} style={{ padding: 10 }}>
                                                    <Text style={{ fontWeight: '700' }}>{time}</Text>
                                                    <Image
                                                        source={{ uri: previsao[date][time]['icone'] }}
                                                        style={{ width: 40, height: 40 }}
                                                    />
                                                    <Text>{previsao[date][time]['resumo']}</Text>
                                                    <Text>Max: {previsao[date][time]['temp_max']}</Text>
                                                    <Text>Min: {previsao[date][time]['temp_min']}</Text>
                                                    <Text>Ventos: {previsao[date][time]['int_vento']}</Text>
                                                </View>
                                            ))
                                        }
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
        )
    } else {
        return <Text>Nothing</Text>
    }
}

async function getCityClima(geocode) {
    const response = await axios.get(`https://apiprevmet3.inmet.gov.br/previsao/${geocode}`).then((res) => {
        return res.data[geocode];
    }).catch((err) => console.log(err));

    if (!response) response = {};
    return response;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 10
    },
    containerItem: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray"
    }
});
