import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';
import { InputData } from '../../components';
import FIREBASE from '../../config/FIREBASE';


export default class tambahWish extends Component {

    //menyimpan data ke db
    constructor(props) {
        super(props)

        this.state = {
            wish: '',
            desc: '',
            when: '',
        }
    }

    //method untuk state
    onChangeText = (namaState, value) => {
        this.setState({
            [namaState]: value
        });
    };

    onSubmit = () => {
        //untuk validasi
        if (this.state.wish && this.state.desc && this.state.when) {
           
            const  wishRef = FIREBASE.database().ref('wishes');
            const wishes = {
                wish : this.state.wish,
                desc : this.state.desc,
                when : this.state.when,
            }

            wishRef
            .push(wishes)
            .then((data) => {
                Alert.alert('Yeay tersimpan','Semoga cepat terkabulkan');
                this.props.navigation.replace('Home');
            })
            .catch((error) => {
                console.log("Oops! ", error);
            })

        }else {
            Alert.alert('Oops!','Hei ada yang belum kamu isi, isi dulu ya');
        }
    };

    render() {

        return (

            <View style={styles.pages}>

                <InputData
                    label="Apa Keinginanmu?"
                    placeholder="Tulis disini"
                    onChangeText={this.onChangeText}
                    value={this.state.wish}
                    namaState="wish" />

                <InputData
                    label="Deskripsikan Keinginanmu?"
                    placeholder="Tulis disini"
                    onChangeText={this.onChangeText}
                    value={this.state.desc}
                    namaState="desc" />

                <InputData
                    label="Kapan diwujudkan?"
                    placeholder="Tulis disini"
                    onChangeText={this.onChangeText}
                    value={this.state.when}
                    namaState="when" />

                <TouchableOpacity style={styles.tombol} onPress={() => this.onSubmit()} >
                    <Text style={styles.textTombol}> Simpan </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        padding: 30
    },
    tombol: {
        backgroundColor: '#663399',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
       
    },
    textTombol: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }

});
