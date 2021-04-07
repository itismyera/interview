import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
//导入外部文件
import YNProblemView from '../view/YNProblemView';
import YNHomeSubView from '../view/YNHomeSubView';
import YNMoreWebView from '../view/YNMoreWebView';
import YNTestButtomNavigator from './YNTestButtomNavigator';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


//创建StackNavigator
const YNMain = createStackNavigator({
        YNMore:{
            screen:YNTestButtomNavigator,
        },
        YNProblemView:{
            screen:YNProblemView,
        },
        YNHomeSubView:{
            screen:YNHomeSubView,
        },
        YNMoreWebView:{
            screen:YNMoreWebView,
        }
    },
    {
        initialRouteName: 'YNMore',
    }
);

export default createAppContainer(YNMain);