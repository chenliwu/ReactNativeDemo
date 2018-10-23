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
        this.state = {
            animating: true,
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

                {/* <TouchableOpacity underlayColor="#fff" style={styles.btn} onPress={
                    this.showOrHide.bind(this)}>
                    <Text style={{ color: '#fff', fontSize: 20 }}>显示/隐藏</Text>
                </TouchableOpacity> */}

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

                <ActivityIndicator style={[styles.centering, { height: 80 }]} size="large"
                    animating={this.state.animating} />

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
