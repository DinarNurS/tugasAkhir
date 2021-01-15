import React, {useEffect} from 'react';
import {StyleSheet,Image } from 'react-native';
import {splashBg} from '../../assets';

const Splash= ({ navigation }) => {

    useEffect(() => {
        setTimeout( () => {
            navigation.replace('MainApp');
        }, 3000)
        }, [navigation]);

    return(
    
        <Image source = {splashBg} style={styles.bg}/>
    )
}

export default Splash

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
