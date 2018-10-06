import React from 'react';
import {
    View, Text, Button
} from 'react-native';

import AsyncStorageUtils from './AsyncStorageUtils';

/**
 * AsyncStorage练习
 */
export default class AsyncStorageBasics extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Button title="写入数据" onPress={() => {
                    AsyncStorageUtils.save("mykey", "myvalue")
                        .then((value) => {
                            alert("value:" + value);
                        });
                }}></Button>
                <Button title="读取数据" onPress={() => {
                    AsyncStorageUtils.get("mykey")
                        .then((value) => {
                            alert("读取数据,myvalue=" + value);
                        }).catch((error) => {
                            alert("读取不到数据：" + error);
                        })
                }}></Button>
            </View>
        )
    }

}

