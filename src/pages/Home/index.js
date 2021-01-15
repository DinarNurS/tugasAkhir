
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Alert, Image, Dimensions, ImageBackground, ScrollView} from 'react-native';
import CardWish from '../../components/CardWish';
import FIREBASE from '../../config/FIREBASE';
import {bg, tulisan} from '../../assets';

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: {},
            notesKey: [],
            jml: {},
        }
    }

    //database
    componentDidMount() {
        this.ambilData();
    }

    ambilData() {
        FIREBASE.database()
            .ref("wishes")
            .once('value', (querySnapShot) => {

                let data = querySnapShot.val() ? querySnapShot.val() : {};
                let noteItem = { ...data };
               

                this.setState({
                    notes: noteItem,
                    notesKey: Object.keys(noteItem),
                
                })
            })
    }

    //hapus
    removeData = (id) => {
        Alert.alert(
            'Kabar gembira!',
            'Keinginan kamu sudah terwujud?',
            [
                {
                    text: "Belum",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Sudah", onPress: () => {
                        FIREBASE.database()
                            .ref('wishes/' + id)
                            .remove();
                        this.ambilData();
                        Alert.alert("Selamat", "Kamu berhasil!")
                    }
                }
            ],
            { cancelable: false }
        );
    }

    render() {
        const { notes, notesKey } = this.state
        return (
            <View style={styles.page} >

                <ImageBackground source={bg} style={styles.header}>
                    <Image source={tulisan} style={styles.logo} />
                </ImageBackground>

                <View style={styles.listWish}>
                   <ScrollView>
                    {notesKey.length > 0 ? (
                        notesKey.map((key) => (
                            <CardWish key={key} noteItem={notes[key]} id={key} {...this.props} removeData={this.removeData} />
                        ))
                    ) : (
                            <Text>Kamu belum ada keinginan apapun</Text>
                        )}
                        </ScrollView>
                </View>

                <View style={styles.wrapperButton}>
                    <TouchableOpacity
                        style={styles.btnTambah}
                        onPress={() => this.props.navigation.navigate('tambahWish')}>
                        <FontAwesomeIcon icon={faPlus} size={20} color={'white'} />
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.2,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  logo: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.18,
  },
    title: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    garis: {
        borderWidth: 1,
        marginTop: 10
    },
    listWish: {
        paddingHorizontal: 30,
        marginTop: 20
    },
    wrapperButton: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 30
    },
    btnTambah: {
        padding: 20,
        backgroundColor: `#663399`,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
})
