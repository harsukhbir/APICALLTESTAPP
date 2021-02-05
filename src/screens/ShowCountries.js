import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import NetInfo from "@react-native-community/netinfo";

import CountryView from '../component/CountryView'
function ShowCountries() {
    const [internetAvailable, setInternet] = React.useState(true);
    const countriesData = useSelector(state => state && state.countries);
    React.useEffect(() => {

        NetInfo.fetch().then(state => {
            if (!state.isInternetReachable) {
                setInternet(false);
                alert("No Internet connection.")
            }
        });
    }, [false])
    return (
        <>
            {!internetAvailable &&
                <Text>No Internet Connection</Text>
            }
            <FlatList
                data={countriesData}
                renderItem={({ item, index }) => (
                    <CountryView data={item} key={index} />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </>
    )
}
export default ShowCountries;