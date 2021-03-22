import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';
import {Button, Icon, List, ListItem, Avatar } from 'react-native-elements';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const list = [
    {
        id:1,
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
        id:2,
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
    {
        id:3,
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        id:4,
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        id:5,
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
    // ... // more items
  ]


class YNTest extends React.Component {

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <ListItem bottomDivider>
            <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
    render() {
        return (
            // <View style={styles.container}>
            //     <Text style={styles.welcome}>答题</Text>

            // </View>
            // <List containerStyle={styles.listContainer} > 
            //     {list.map((l, i) => ( 
            //         <ListItem 
            //             key={i} 
            //             title={l.title} 
            //             subtitle={l.subtitle} 
            //             // leftIcon={l.icon} 
            //             containerStyle={styles.ListItemContainer} 
            //             titleStyle={{ fontSize: 15, }} 
            //             subtitleStyle={{ fontWeight: 'normal' }} 
            //             // onPress={() => navigation.navigate(l.detail)} 
            //         /> 
            //     ))} 
            // </List>
            <View style={styles.container}>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={list}
                    renderItem={this.renderItem}
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

export {YNTest as default};