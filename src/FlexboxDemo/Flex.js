import React,{Component} from 'react';
import {
    View,
    StyleSheet,
}from 'react-native';


/**
 * flex属性可以让组件动态计算和配置 自己所占用的空间大小，取值是数字。
 * 数值越大，所占空间越多。
 * flex属性是Flexbox布局实现自适应设备和屏幕适配的核心。
 *
 * @author: chenlw
 * @date 2018/8/7  22:50
 **/
export default class FlexBasics extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.view1}></View>
                <View style={styles.view2}></View>
                <View style={styles.view3}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view1: {
        flex:1,
        backgroundColor:'red',
    },
    view2:{
        flex:2,
        backgroundColor:'green',
    },
    view3:{
        flex:3,
        backgroundColor:'blue',
    }
});