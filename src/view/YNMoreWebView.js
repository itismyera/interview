import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, ActivityIndicator, TouchableHighlight, Image, addEventListener } from 'react-native';
import { WebView } from 'react-native-webview';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

class YNMoreWebView extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: navigation.state.params.showData.title,
        headerTitleStyle: {
            alignSelf: 'center',
            textAlign: 'center',
            fontSize: 16,
            color: '#FFF'
        },
        headerLeft: () => (
            <TouchableHighlight
                activeOpacity={1}
                underlayColor={'#4A4AFF'}
                onPress={() => {
                    navigation.state.params.goBackPage();
                }}
            >
                <View style={{ paddingLeft: 10 }}>
                    <Image source={require("../img/webBack.png")} style={{ width: 35, height: 35}} />
                </View>
            </TouchableHighlight>
        ),

        headerRight: () => <View style={{ paddingRight: 20 }} />

    });

    constructor(props) {
        super(props);
        this.nav = this.props.navigation;//导航
        // 添加返回键监听(对Android原生返回键的处理)
        this.addBackAndroidListener(this.nav);
    }

    componentDidMount() {
        this.props.navigation.setParams({//给导航中增加监听事件
            goBackPage: this._goBackPage
        });
    }

    //自定义返回事件
    _goBackPage = () => {
        //  官网中描述:backButtonEnabled: false,表示webView中没有返回事件，为true则表示该webView有回退事件
        if (this.state.backButtonEnabled) {
            this.refs['webView'].goBack();
        } else {//否则返回到上一个页面
            this.nav.goBack();
        }
    };
    //获取链接
    getSource() {//config.HelpProblemUrlTest是webView的地址(一个独立的H5页面)
        if (!config.Release) {
            return config.HelpProblemUrlTest;
        }
        return config.HelpProblemUrl;
    }

    onNavigationStateChange = navState => {
        this.setState({
            backButtonEnabled: navState.canGoBack
        });
    };

    // 监听原生返回键事件
    addBackAndroidListener(navigator) {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
        if (this.state.backButtonEnabled) {
            this.refs['webView'].goBack();
            return true;
        } else {
            return false;
        }
    };

    loading = () => {
        return <ActivityIndicator style={styles.flash} size='small' color='#aa00aa' />
    }

    render() {
        const showData = this.props.navigation.state.params.showData

        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    translucent={true}
                    animated={true}
                    backgroundColor={"#73808080"}
                    barStyle={"light-content"}
                />
                <WebView
                    source={{ uri: showData.link }}
                    startInLoadingState
                    renderLoading={() => {
                        return this.loading()
                    }}
                    ref="webView"
                    onNavigationStateChange={this.onNavigationStateChange}
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

export { YNMoreWebView as default };