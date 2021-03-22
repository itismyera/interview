import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

//导入外包文件
import YNHome from '../view/YNHome';
import YNTest from '../view/YNTest';
import YNMine from '../view/YNMine';
import YNMore from '../view/YNMore';

import {createAppContainer} from 'react-navigation';

import {createBottomTabNavigator} from 'react-navigation-tabs';

export default YNTestButtomNavigator = createBottomTabNavigator({


    Home:{
        screen:YNHome,
        navigationOptions:{
            //tab 的属性的属性
            tabBarLabel:'题库',
            tabBarIcon:({tintColor, focused}) => (
               focused ?
                <Image
                    source={require('../img/home_sel.png')}
                    style={styles.iconStyle}

                />
                :
                <Image
                    source={require('../img/home_nor.png')}
                    style={styles.iconStyle}
                />
            )
        }
    },

    YNTest:{
        screen:YNTest,
        navigationOptions:{
            //tab 的属性
            tabBarLabel:'答题',
            tabBarIcon:({tintColor, focused}) =>(
            focused ?
                <Image
                    source={require('../img/task_sel.png')}
                    style={styles.iconStyle}

                />
                :
                <Image
                    source={require('../img/task_nor.png')}
                    style={styles.iconStyle}
                />
            )
        }
    },

    YNMine:{
        screen:YNMine,
        navigationOptions:{
               //tab 属性
            tabBarLabel:'我的',
            tabBarIcon:({tintColor, focused}) =>(
            focused ?
                <Image
                    source={require('../img/car_sel.png')}
                    style={styles.iconStyle}

                />
                :
                <Image
                    source={require('../img/car_nor.png')}
                    style={styles.iconStyle}
                />
            )
        }
    },

    YNMore:{
        screen:YNMore,
        navigationOptions:{
            //tab 属性
            tabBarLabel:'更多',
            tabBarIcon:({tintColor, focused}) =>(
            focused ?
                <Image
                    source={require('../img/fri_sel.png')}
                    style={styles.iconStyle}

                />
                :
                <Image
                    source={require('../img/fri_nor.png')}
                    style={styles.iconStyle}
                />
            )

        }
    },
    },
    {
        //设置TabNavigator的位置
        tabBarPosition: 'bottom',
        //是否在更改标签时显示动画
        animationEnabled: true,
        //是否允许在标签之间进行滑动
        swipeEnabled: true,
        //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        backBehavior: "none",
        //进入App的首页
        initialRouteName:'Home',
        //设置Tab标签的属性
        tabBarOptions: {
            //Android属性
            upperCaseLabel: false,//是否使标签大写，默认为true
            //共有属性
            showIcon: true,//是否显示图标，默认关闭
            showLabel: true,//是否显示label，默认开启
            activeTintColor: 'orange',//label和icon的前景色 活跃状态下（选中）
            inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
        },
        navigationOptions: ({navigation}) => ({
            title: navigation.state.routeName,
            headerStyle: {backgroundColor: '#fff',},
            headerTintColor: color.activeBarText,
            headerTitleStyle: {fontWeight: 'bold',},
        }),

   });
//导航条上的内容展示
YNTestButtomNavigator.navigationOptions = ({navigation}) => {
    let names = ["题库", "答题", "我的", "更多"]
    // let {routeName} = navigation.state.routes[navigation.state.index];
    let {routeName} = names[navigation.state.index];
    // You can do whatever you like here to pick the title based on the route name
    let headerTitle = names[navigation.state.index];
    return {
        headerTitle,
    };
};



const styles = StyleSheet.create({
    iconStyle:{

        width:Platform.OS === 'ios' ? 30 :25,
        height:Platform.OS === 'ios' ? 30 :25
    },
});