import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class LotsOfStyle extends Component{
    render(){
        return (
            <View>
                <Text style={mystyles.red}> just red</Text>
                <Text style={mystyles.bigblue}> just bigblue</Text>
                <Text style={[mystyles.bigblue, mystyles.red]}>bigblue, then red</Text>
                <Text style={[mystyles.red, mystyles.bigblue]}>red, then bigblue</Text>
            </View>
        );
    }
}

/**
 * 所有的核心组件都接受名为style的属性。这些样式名基本上是遵循了web上的CSS的命名，只是按照JS的语法要求使用了驼峰命名法，
 * 例如将background-color改为backgroundColor。

    style属性可以是一个普通的JavaScript对象。这是最简单的用法，因而在示例代码中很常见。
    你还可以传入一个数组——在数组中位置居后的样式对象比居前的优先级更高，这样你可以间接实现样式的继承。

 * @type {Config|*|StyleSheet.<S>|{panHandlers, getInteractionHandle}|{type, property}}
 */
/**
 * 建议使用StyleSheet.create来集中定义组件的样式。
 * 建议把一类控件的样式抽象出来，这样可以大大降低代码的冗余
 * @type {Config|*|StyleSheet.<S>|{panHandlers, getInteractionHandle}|{type, property}}
 */
const mystyles = StyleSheet.create({
    bigblue:{
        color:'blue',
        fontWeight:'bold',
        fontSize:30,
    },
    red:{
        color:'red',
        fontSize:25,
    }
});