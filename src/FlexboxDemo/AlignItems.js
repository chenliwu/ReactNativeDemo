import React, {Component} from 'react';
import {View} from 'react-native';

/**
 * 在组件的style中指定alignItems可以决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式。
 * 子元素是应该靠近次轴的起始端还是末尾段分布呢？亦或应该均匀分布？对应的这些可选项有：flex-start、center、flex-end以及stretch。
 *
 *
 * 要使stretch选项生效的话，子元素在次轴方向上不能有固定的尺寸。
 * 以下面的代码为例：只有将子元素样式中的width: 50去掉之后，alignItems: 'stretch'才能生效。
 */
export default class AlignItemsBasics extends Component {
    render() {

        return (

            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}></View>
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}></View>
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}></View>
            </View>
        );
    }
}