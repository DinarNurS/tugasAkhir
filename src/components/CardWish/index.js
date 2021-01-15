import { faCheck, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CardWish = ({ id, noteItem, navigation, removeData }) => {

    return (

        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('DetailWish', { id: id })}>
            <ScrollView>
                <View>
                    <Text style={styles.wish}>{noteItem.wish}</Text>
                    <Text style={styles.when}>Harus terwujud di {noteItem.when}</Text>
                </View>

                <View style={styles.icon}>
                    <FontAwesomeIcon icon={faEdit} color={'orchid'} size={20} onPress={() => navigation.navigate('editWish', { id: id })} />
                    <FontAwesomeIcon icon={faCheck} color={'green'} size={20} onPress={() => removeData(id)} />

                </View>
                </ScrollView>
        </TouchableOpacity>
    )
}

export default CardWish

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 9,
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    wish: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5
    },
    when: {
        color: 'grey',
        fontSize: 12,
    },
    icon: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});
