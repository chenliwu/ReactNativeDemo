import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text
} from 'react-native';

/**
 * 组件的style中指定flexDirection可以决定布局的主轴。
 * 可选值有两个：column,row。默认值是竖直轴(column)方向。
 * 属性值及其含义如下：
 * （1）flexDirection: 'column' 沿着竖直轴(column)方向排列（默认）
 * （2）flexDirection: 'row' 子元素是沿着水平轴(row)方向排列
 *
 */
export default class FlexDirectionBasics extends Component {
    render() {
        return (
            // 尝试把`flexDirection`改为`column`看看
            // flexDirection: 'row' 子元素是沿着水平轴(row)方向排列
            // flexDirection: 'column' 沿着竖直轴(column)方向排列（默认）
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} >
                    <Text>
                        One
                    </Text>
                </View>
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} >
                    <Text>
                        two
                    </Text>
                </View>
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} >
                    <Text>
                        three
                    </Text>
                </View>
            </View>
        );
    }
};
