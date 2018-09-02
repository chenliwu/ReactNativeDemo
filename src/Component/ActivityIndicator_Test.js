import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    ActivityIndicator
} from 'react-native';

export default class ActivityIndicatorBasics extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text>全部默认：</Text>
                    <ActivityIndicator />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>添加背景色：</Text>
                    <ActivityIndicator style={{ backgroundColor: 'blue' }} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>animating=false （隐藏）：</Text>
                    <ActivityIndicator animating={false} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>设置color：</Text>
                    <ActivityIndicator color='red' />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>size small：</Text>
                    <ActivityIndicator size="small" />
                    <Text>size large：</Text>
                    <ActivityIndicator size="large" />

                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>view props属性设置：</Text>
                    <ActivityIndicator style={{ height: 100, width: 80, backgroundColor: 'black' }} />

                </View>
            </View>
        );
    }

}
