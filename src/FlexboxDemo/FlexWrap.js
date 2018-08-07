import React,{Component} from 'react';
import {
    View,
    StyleSheet,
}from 'react-native';


/**
 * flexWrap属性设置是否换行
 *  flexWrap属性表明子元素“溢出”父组件时是否进行换行。
 *
 * 取值有有以下几个：
 *（1）nowrap：默认值，不进行换行。
 *（2）wrap：子元素溢出时将换行。
 *
 * @author: chenlw
 * @date 2018/8/7  22:35
 **/
export default class FlexWrapBasics extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.view1}></View>
                <View style={styles.view2}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        flexWrap:'wrap',
        backgroundColor: 'gray',
    },
    view1: {
        height: 200,
        width:200,
        backgroundColor:'red',
    },
    view2:{
        height: 200,
        width:200,
        backgroundColor:'green',
    }
});