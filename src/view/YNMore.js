import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import webJson from '../pro/webJson.json'

const { width, height } = Dimensions.get('window');//屏幕宽度

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{parseInt(item.index) + 1}.{item.title}</Text>
    </TouchableOpacity>
);

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

class YNMore extends React.Component {

    state = {
        selectedIndex: null,
    }

    setSelectedIndex(index) {
        this.setState({
            selectedIndex: index,
        })
    }

    renderItem = ({ item }) => {
        const backgroundColor = item.index === this.state.selectedIndex ? "#FFAF60" : "#FFFCEC";

        return (
            <Item
                item={item}
                onPress={() => {
                    this.setSelectedIndex(item.index);
                    let data = {
                        nowIndex: item.index,
                        showData: webJson[parseInt(item.index)],
                    }
                    this.props.navigation.navigate('YNMoreWebView', data)
                }}

                style={{ backgroundColor }}
            />
        );
    };

    render() {
        //导航条设置
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <FlatList
                    data={webJson}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.index.toString()}
                    style={styles.flatListStyle}
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
    flatListStyle: {
        width: width,
        flex: 1,
    },
    item: {
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 5,
    },
    title: {
        fontSize: 18,
        textAlign: 'left',
        color: '#4A4AFF'
    },
});
export {YNMore as default};