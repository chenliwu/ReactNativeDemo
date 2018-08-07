/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

/**
 * const 定义一个常量，定义的时候必须初始化且不可改变。
 */
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
/**
 * export default class  默认导出的类
 */
export default class App extends Component<Props> {
    render() {
        return (
            /**
             * style属性可以是一个普通的JavaScript对象。
             */
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Charlie,
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
            </View>
        );
    }
}

/**
 * 建议使用StyleSheet.create来集中定义组件的样式。
 * 常见的做法是按顺序声明和使用style属性，以借鉴CSS中的“层叠”做法（即后声明的属性会覆盖先声明的同名属性）。
 *
 *
 * StyleSheet.create 的创建是可选的，但提供了一些关键优势。
 * 它通过将它们转换为引用一个内部表的纯数字，来确保值是不可变的和不透明的。
 * 通过将它放在文件的最后，也确保了它们为应用程序只创建一次，而不是每一个 render 都创建。
 * @type {Config|*|StyleSheet.<S>|{panHandlers, getInteractionHandle}|{type, property}}
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 23,
        textAlign: 'center',
        margin: 10,
        color:'red'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
