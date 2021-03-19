import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    BackHandler,
    ToastAndroid,
    View,
    ActivityIndicator,
    StatusBar
} from 'react-native';

import {WebView} from 'react-native-webview';

const currentHeight = StatusBar.currentHeight;

export default class HomePage extends Component {
    static navigationOptions = {
        tabBarLabel: '题库',
        headerShown: false,
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../img/home_sel.png')}/>
                );
            }
            return (
                <Image style={styles.tabBarIcon} source={require('../img/home_nor.png')}/>
            );
        },
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    translucent={true}
                    animated={true}
                    backgroundColor={"#73808080"}
                    barStyle={"light-content"}
                />
                {/* <WebView
                    // source={{uri: 'http://www.qiandu.com/#/mine/center'}}
                    source={{uri: 'https://www.imooc.com/#'}}
                    startInLoadingState
                    renderLoading={() => {
                        return this.loading()
                    }}
                /> */}
            </View>
        );
    }

    loading = () => {
        return <ActivityIndicator style={styles.flash} size='small' color='#aa00aa'/>
    }

}
const styles = StyleSheet.create({
    container: {
        marginTop: currentHeight
    },
    flash: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    tabBarIcon: {
        width: 19,
        height: 19,
    }
});
