/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import {createAppContainer} from 'react-navigation';
import App from './App'
import {name as appName} from './app.json';

// const AppStackNavigatorContainer = createAppContainer(App);
AppRegistry.registerComponent(appName, () => App);
