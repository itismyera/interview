import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');//屏幕宽度

const problemPool = [
    {
        index: "0",
        title: "C++",
    },
    {
        index: "1",
        title: "JaveScript/TypeScript",
    },
    {
        index: "2",
        title: "lua开发",
    },
    {
        index: "3",
        title: "网络",
    },
    {
        index: "4",
        title: "ES6标准",
    },
    {
        index: "5",
        title: "cocos引擎",
    },
    {
        index: "6",
        title: "数据结构和算法",
    },
    {
        index: "7",
        title: "计算机系统",
    },
    {
        index: "8",
        title: "游戏开发知识",
    },
    {
        index: "9",
        title: "项目总结",
    },
    {
        index: "10",
        title: "图形图像知识",
    },
];

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{parseInt(item.index)+1}.{item.title}</Text>
    </TouchableOpacity>
);

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

class YNHome extends React.Component {

    state = {
        selectedIndex: null,
    }

    setSelectedIndex(index) {
        this.setState({
            selectedIndex: index,
        })
    }

    renderItem = ({ item }) => {
        const backgroundColor = item.index === this.state.selectedIndex ? "#6e3b6e" : "#f9c2ff";

        return (
            <Item
                item={item}
                onPress={() => {
                    this.setSelectedIndex(item.index);
                    let data = {
                        nowIndex: item.index,
                        allData: problemPool,
                    }
                    this.props.navigation.navigate('YNHomeSubView', data)
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
                    data={problemPool}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.index}
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
        // backgroundColor: 'red',
    },
    item: {
        padding: 3,
        marginVertical: 5,
        marginHorizontal: 5,
    },
    title: {
        fontSize: 26,
        textAlign: 'center',
    },
});

export { YNHome as default };