import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import pro1 from '../pro/pro1.json'
import pro2 from '../pro/pro2.json'
// import pro3 from '../pro/pro3.json'
// import pro4 from '../pro/pro4.json'
// import pro5 from '../pro/pro5.json'
// import pro6 from '../pro/pro6.json'
// import pro7 from '../pro/pro7.json'
// import pro8 from '../pro/pro8.json'
// import pro9 from '../pro/pro9.json'
// import pro10 from '../pro/pro10.json'
// import pro11 from '../pro/pro11.json'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
class YNTest extends React.Component {

    generateProblems() {
        var allData = [pro1, pro2];
        var data = [];
        var beginIndex = 0;
        for (var i=0; i<allData.length; ++i) {
            var oneData = allData[i];
            var nums = this.randNums(0, oneData.length, 3);
            for (var j=0; j<nums.length; ++j) {
                var chooseData = JSON.parse(JSON.stringify(oneData[j]));
                chooseData.index = beginIndex.toString();
                data.push(chooseData); 
                beginIndex ++ ;
            }
        }
        return data;
    }

    randNums(min,max,count){
        var arr = [];
        for(var i=min;i<max;i++){
            arr.push(i);
        }
        var nums = [];
        var temp = 0;
        for(var i=0;i<count;i++){
            var j = Math.floor((Math.random()*(max - min -i)));
            temp = arr[j];
            nums[i] = temp;
            arr.splice(j,1);
        }
        return nums;
    }

    render() {
        //导航条设置
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Button
                    title="开始测试"
                    onPress={() => {
                        let data = {
                            nowIndex: "0",
                            allData: this.generateProblems(),
                            showSingle: false,
                        }
                        this.props.navigation.navigate('YNProblemView', data)}
                    }
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
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export {YNTest as default};