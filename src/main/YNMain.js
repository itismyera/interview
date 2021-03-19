import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
//导入外部文件
import NavigatorTextOne from './NavigatorTextOne';
import YNTestButtomNavigator from './YNTestButtomNavigator';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


//创建StackNavigator
const YNMain = createStackNavigator({
        Home:{
            screen:YNTestButtomNavigator,
        },
        NavigatorTextOne:{
            screen:NavigatorTextOne,
        },
    },
    {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(YNMain);