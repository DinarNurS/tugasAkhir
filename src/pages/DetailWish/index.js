import React, { Component } from 'react';
import { Text, StyleSheet, View, ImageBackground, Image, Dimensions } from 'react-native';
import { bawah } from '../../assets';
import FIREBASE from '../../config/FIREBASE';

export default class DetailWish extends Component {
    constructor(props) {
        super(props)

        this.state = {
            wishes: {}
        }
    }

    //database
    componentDidMount() {
        FIREBASE.database()
            .ref("wishes/" + this.props.route.params.id)
            .once('value', (querySnapShot) => {

                let data = querySnapShot.val() ? querySnapShot.val() : {};
                let noteItem = { ...data };

                this.setState({
                    wishes: noteItem
                });
            });
    }


    render() {
        const { wishes } = this.state;
        return (
            <View style={styles.pages}>
                <Text>Keinginanku : </Text>
                <Text style={styles.text}>{wishes.wish} </Text>

                <Text>Deskripsi : </Text>
                <Text style={styles.text}>{wishes.desc} </Text>

                <Text>Terwujud : </Text>
                <Text style={styles.text}>{wishes.when} </Text>

            
                    <ImageBackground style={styles.gambar}>
                        <Image source={bawah} style={styles.gambar} ></Image>
                    </ImageBackground>
              
            </View>



        );
    }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    pages: {
        padding: 20,
        margin: 20,
        borderRadius: 5,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },
    gambar: {
        width: windowWidth * 0.25,
        height: windowHeight * 0.15,
  
    }
})
