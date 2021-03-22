import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';

class YNProblemView extends React.Component {
    static navigationOptions = {
        headerTitle: '题目详情'
    }

    getNextProblem() {

    }

    getPreProblem() {

    }

    render() {
        const { state } = this.props.navigation;
        var allData = state.params.allData
        return (
            <View style={styles.container}>
                <View style={{ flex: 10 }} >
                    <ScrollView style={styles.scrollView}>
                        {/* <Text style={styles.text}>
                            {this.state.readTxtResult}
                        </Text> */}
                        {allData.map((info, index) => {
                            return (
                                <View key={index}> 
                                    <Text> {info.id},{index}</Text>
                                    <Text> {info.title},{index}</Text>
                                </View>
                            );
                        })}
                        {/* <Text>{state.params.nowId}</Text> */}
                    </ScrollView>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }} >
                    <TouchableOpacity onPress={this.getPreProblem.bind(this)} activeOpacity={0.2} focusedOpacity={0.5} style={{ flex: 1 }}>
                        <Text style={styles.buttonText}>上一题</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.getNextProblem.bind(this)} activeOpacity={0.2} focusedOpacity={0.5} style={{ flex: 1 }}>
                        <Text style={styles.buttonText}>下一题</Text>
                    </TouchableOpacity>
                </View>
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
    tilte: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    answer: {
        fontSize: 18,
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    scrollView: {
        marginHorizontal: 5,
        marginVertical: 5,
    },
    buttonText: {
        textAlign: 'center'
    },
    button: {

    }
});



export { YNProblemView as default };