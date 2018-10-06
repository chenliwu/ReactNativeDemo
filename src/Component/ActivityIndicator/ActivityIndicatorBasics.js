import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

export default class ActivityIndicatorBasics extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            animating: false,
        }
    }

    /**
     * 按钮响应方法，切换显示与隐藏
     */
    showOrHide() {
        if (this.state.animating) {
            this.setState({
                animating: false
            });
        } else {
            this.setState({
                animating: true
            });
        }
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                <ActivityIndicator color='blue' style={[styles.centering, { height: 80 }]} size="large" animating={this.state.animating} ></ActivityIndicator>
                <Button title="显示加载指示器" onPress={() => {
                    this.setState({
                        animating: true
                    })
                }}></Button>
                <Button title="隐藏加载指示器" onPress={() => {
                    this.setState({
                        animating: false
                    })
                }}></Button>
            </View >
        )
    }

}


const styles = StyleSheet.create({
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
});
