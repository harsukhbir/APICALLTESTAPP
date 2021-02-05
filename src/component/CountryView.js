import React from 'react';
import { View, Text } from 'react-native';


function ShowLineWidget(props) {
    return (
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: props.bold ? "bold" : "normal" }}>{props.title}</Text>
            </View>
            <View style={{ flex: 3 }}>
                <Text style={{ fontWeight: props.bold ? "bold" : "normal" }}>{props.value}</Text>
            </View>
        </View>
    )
}

function CountryView(props) {
    return (
        <View style={{ padding: 20 }}>
            <View style={{ borderColor: "#990000", borderWidth: 1, padding: 10 }}>
                <ShowLineWidget
                    title={"Name"}
                    value={props.data.name}
                    bold={true}
                />
                <ShowLineWidget
                    title={"Capital"}
                    value={props.data.capital}
                />
                <ShowLineWidget
                    title={"Population"}
                    value={props.data.population}
                />
                <ShowLineWidget
                    title={"Region"}
                    value={props.data.region}
                />
            </View>
        </View>
    )
}
export default CountryView;