import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class YNHome extends React.Component {
    
    render() {
        //导航条设置
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>

                <Text style={styles.welcome}>首nnnnn页</Text>

                <Button
                    title="Go to NavigatorTextOne"
                    onPress={() => this.props.navigation.navigate('NavigatorTextOne', {name: '这是传递到NavigatorThree页面的参数Name:nihao',title: '需要传递的参数bioati'})}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export {YNHome as default};