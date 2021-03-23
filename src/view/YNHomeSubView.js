import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import pro1 from '../pro/pro1.json'
import pro2 from '../pro/pro2.json'
import pro3 from '../pro/pro3.json'
import pro4 from '../pro/pro4.json'
import pro5 from '../pro/pro5.json'
import pro6 from '../pro/pro6.json'
import pro7 from '../pro/pro7.json'
import pro8 from '../pro/pro8.json'
import pro9 from '../pro/pro9.json'
import pro10 from '../pro/pro10.json'
import pro11 from '../pro/pro11.json'

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

class YNHomeSubView extends React.Component {

    data = [pro1, pro2, pro3, pro4, pro5, pro6, pro7, pro8, pro9, pro10, pro11];

    static navigationOptions = ({ navigation }) => ({
        headerTitle: navigation.state.params.allData[parseInt(navigation.state.params.nowIndex)].title,
      });

    state = {
        selectedIndex: null,
        showData: this.data[parseInt(this.props.navigation.state.params.nowIndex)],
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
                        allData: this.state.showData,
                        showSingle: true,
                    }
                    this.props.navigation.navigate('YNProblemView', data)
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
                    data={this.state.showData}
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
        // backgroundColor: 'red',
    },
    item: {
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 5,
    },
    title: {
        fontSize: 18,
        textAlign: 'left',
    },
});

export { YNHomeSubView as default };