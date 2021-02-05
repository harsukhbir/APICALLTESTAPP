import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useDispatch } from 'react-redux'
import axios from 'axios'

import Home from '../screens/Home';
import ShowCountries from '../screens/ShowCountries';

import { setCountriesData } from '../redux'

const Drawer = createDrawerNavigator();

function TopNavigation() {
    const dispatch = useDispatch();

    const getCountries = async () => {
        try {
            axios.get("https://restcountries.eu/rest/v2/all")
                .then((result) => {
                    dispatch(setCountriesData(result.data))
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        catch (err) {
            console.log(err);
        }
    }

    React.useEffect(() => {
        getCountries();
    }, [false])
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Show Countries" component={ShowCountries} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default TopNavigation;