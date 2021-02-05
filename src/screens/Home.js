import React from 'react';
import { View, Text } from 'react-native';

function Home() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Please swipe from the left edge to open drawer</Text>
        </View>
    )
}

export default Home;