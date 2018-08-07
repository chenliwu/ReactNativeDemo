import React,{Component} from 'react';
import {
    View,
    StyleSheet,
}from 'react-native';


/**
 * alignSelf属性表明某个特定组件的排列情况。
 * （1）auto：自动，默认值。
 * （2）flex-start：
 * （3）flex-end：
 * （4）center：按父组件主轴居中显示
 * （5）stretch：
 *
 * @author: chenlw
 * @date 2018/8/7  22:58
 **/
export default class AlignSelfBasics extends Component{
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
    },
    view1: {
        width:150,
        height:150,
        backgroundColor:'red',
    },
    view2:{
        width:150,
        height:150,
        backgroundColor:'green',
        alignSelf:'stretch',
    }
});