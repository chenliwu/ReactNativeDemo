import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

export default class ActivityIndicatorBasics extends React.Component {

    constructor(props) {
        super(props);
        /**
         * 2018-10-24   
         * BUG记录：如果animating初始化false，无论如何点击button，都无法将加载框显示出来。
         * 解决方案：
         *  <ActivityIndicator animating = {this.state.animating} /> 改为
         *  {this.state.animating && <ActivityIndicator animating={this.state.animating} />}
         */
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
            <View style={styles.container}>

                <Button title="显示加载指示器" onPress={() => {
                    // this.setState({
                    //     animating: true
                    // });
                    this.showOrHide();

                }}></Button>
                <Button title="隐藏加载指示器" onPress={() => {
                    this.showOrHide();
                    // this.setState({
                    //     animating: false
                    // });
                    //alert("animating:" + this.state.animating);
                }}></Button>

                {this.state.animating && <ActivityIndicator style={[styles.centering, { height: 80 }]} size="large"
                    animating={this.state.animating} />}

                {/* <ActivityIndicator style={[styles.centering, { height: 80 }]} size="large"
                    animating={this.state.animating} /> */}

            </View >
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    btn: {
        marginTop: 10,
        width: 150,
        height: 35,
        backgroundColor: '#3BC1FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
});
