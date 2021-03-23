import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');//屏幕宽度
class YNProblemView extends React.Component {
    static navigationOptions = {
        headerTitle: '题目详情'
    }

    allData = this.props.navigation.state.params.allData
    nowIndex = this.props.navigation.state.params.nowIndex
    showSingle = this.props.navigation.state.params.showSingle
    showIndex = parseInt(this.nowIndex)

    state = {
        showAnswer: this.showSingle,
        showSingle: this.showSingle,
        showData: this.showSingle ? [this.allData[this.showIndex]] : this.allData
    }

    getNextProblem() {
        if (this.showSingle) {
            if (this.showIndex >= this.allData.length - 1) {
                this.showIndex = -1;
            }
            this.showIndex++;
            this.setState({ showData: [this.allData[this.showIndex]] })
        }
    }

    getPreProblem() {
        if (this.showSingle) {
            if (this.showIndex <= 0) {
                this.showIndex = this.allData.length
            }
            this.showIndex--;
            this.setState({ showData: [this.allData[this.showIndex]] })
        }
    }

    showAnswer() {
        this.setState({ showAnswer: !this.state.showAnswer })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 10 }} >
                    <ScrollView style={styles.scrollView}>
                        {this.state.showData.map((info, index) => {
                            return (
                                <View key={index} style={styles.QandA}>
                                    <Text style={styles.tilte}> {parseInt(info.index) + 1}.{info.title}</Text>
                                    {
                                        this.state.showAnswer === false ? (
                                            null
                                        ) : (
                                            <Text style={styles.answer}> {info.ans}</Text>
                                        )
                                    }
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>
                {
                    this.state.showSingle === false ? (
                        <View style={{ flex: 1, flexDirection: 'row' }} >
                            <TouchableOpacity onPress={this.showAnswer.bind(this)} activeOpacity={0.2} focusedOpacity={0.5} style={{ flex: 1 }}>
                                <Text style={styles.buttonText}>{this.state.showAnswer === true ? "隐藏答案" : "显示答案"}</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={{ flex: 1, flexDirection: 'row' }} >
                            <TouchableOpacity onPress={this.getPreProblem.bind(this)} activeOpacity={0.2} focusedOpacity={0.5} style={{ flex: 1 }}>
                                <Text style={styles.buttonText}>上一题</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.getNextProblem.bind(this)} activeOpacity={0.2} focusedOpacity={0.5} style={{ flex: 1 }}>
                                <Text style={styles.buttonText}>下一题</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
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
        fontSize: 18,
        textAlign: 'left',
        margin: 1,
        fontWeight: 'bold',
    },
    answer: {
        fontSize: 18,
        textAlign: 'left',
        color: '#333333',
        margin: 1,
        marginBottom: 5,
    },
    QandA: {
        padding: 2,
        margin: 1,
        borderBottomColor: "red",
        borderBottomWidth: StyleSheet.hairlineWidth,

    },
    scrollView: {
        marginHorizontal: 5,
        marginVertical: 5,
        width: width - 20,
    },
    buttonText: {
        textAlign: 'center'
    },
    button: {

    }
});



export { YNProblemView as default };