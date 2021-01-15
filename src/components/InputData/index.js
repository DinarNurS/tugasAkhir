import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


const InputData = ({ label, placeholder, onChangeText, namaState, value, text }) => {

    return (
        <View style={styles.pages}>
            <Text style={styles.label}> {label} </Text>

            <TextInput
                placeholder={placeholder}
                style={styles.textInput}
                value={value}
                onChangeText={(text) => onChangeText(namaState, text)}
            />
        </View>
    );
};


export default InputData

const styles = StyleSheet.create({
    pages: {
        padding: 10,
        backgroundColor: 'lavender',
        borderRadius: 15
    },
    label: {
        fontSize: 16,
        marginBottom: 5
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    
});
