import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function TextField(props) {
    return (
        <View>
            <Text style={styles.label}>
                {props.label ? props.label : ""}
            </Text>
            <View style={styles.TextField}>
                <TextInput
                    onChangeText={props.onChange}
                    value={props.value}
                    secureTextEntry={props.security ? props.security : false}

                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    TextField: {
        borderWidth: 1,
        borderRadius: 10,
        margin: 5,
        borderColor: "#f1efee"
    },
    label: {
        alignSelf: 'center',
        color: 'white'
    }
});