import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'

const {width, height} = Dimensions.get('window');//屏幕宽度

const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "C++中const用法",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second ItemSecond Second I",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third ItemThirdThird ItemThirdThird ItemThirdThird ItemThirdThird ItemThird",
    },
  ];

  const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class YNMine extends React.Component {
    state = {
        selectedId: null, 
    }

    setSelectedId(id) {
        this.setState({
            selectedId: id,
        })
    }

    renderItem = ({ item }) => {
        const backgroundColor = item.id === this.state.selectedId ? "#6e3b6e" : "#f9c2ff";

        return (
        <Item
            item={item}
            onPress={() => {
                this.setSelectedId(item.id);
                let data = {
                    nowId: item.id,
                    allData: DATA,
                }
                this.props.navigation.navigate('YNProblemView', data)
            }}

            style={{ backgroundColor }}
        />
        );
    };

    render() {
         //导航条设置
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
            {/* { <Text style={styles.welcome}>我的</Text>
                 } */}
            <FlatList
                    data={DATA}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id}
                    // extraData={this.stateselectedId}
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
        marginVertical: 1,
        marginHorizontal: 1,
    },
    title: {
        fontSize: 14,
        textAlign: 'left',
    },
});

export {YNMine as default};