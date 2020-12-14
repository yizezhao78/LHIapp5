import React from 'react';
import { FlatList, View, Text } from 'react-native';

const PrayScreen = props => {
    props.navigation.getParam('id')
    return (<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>PrayScreen</Text>
        </View>
        );
}

export default PrayScreen;