import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home,Splash, tambahWish, DetailWish, editWish  } from '../pages'

const Stack = createStackNavigator();

const MainApp = () => {
    return (
        //file ada di pages
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="tambahWish" component={tambahWish} options={{ title: 'Tambah'}} />
            <Stack.Screen name="DetailWish" component={DetailWish} options={{ title: 'Detail'}}/>
            <Stack.Screen name="editWish" component={editWish} options={{ title: 'Edit'}} />
        </Stack.Navigator>
    );
};

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false}}/>
            <Stack.Screen name="MainApp" component={MainApp}  options={{ headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default Router;
