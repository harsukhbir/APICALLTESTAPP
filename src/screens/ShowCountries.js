import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import CountryView from '../component/CountryView'
function ShowCountries() {
    const countriesData = useSelector(state => state.countries);
    return (
        <FlatList
            data={countriesData}
            renderItem={({ item, index }) => (
                <CountryView data={item} key={index} />
            )}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}
export default ShowCountries;