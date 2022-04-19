import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function About(props) {
    return (
        <View style={styles.container}>
            <View style={styles.containerItem}>
                <View style={{flexDirection: 'row'}}>
                    <Text>Desenvolvido por:</Text>
                    <Text style={{fontWeight: '700', marginLeft: 5}}>Pablo Maronezi Zilli</Text>
                </View>
                <Text>Email: pablo.zilli@hotmail.com</Text>
                <Text>Linkedin: pablo-maronezi</Text>
                <Text>Github: PabloGMZILLI </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 30
    },
    containerItem: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",
        margin: 5,
    }
});
