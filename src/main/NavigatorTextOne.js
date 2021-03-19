import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

class NavigatorTextOne extends React.Component{

    static navigationOptions = {

        headerTitle:'首页iiiii'
    }

    render(){


        const {state} = this.props.navigation;


        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>{state.params.name}</Text>
            </View>
        );
    }
}



export {NavigatorTextOne as default};