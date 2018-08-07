import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

/**
 * 自定义组件
 * 在Greeting组件中将name作为一个属性来定制，这样可以复用这一组件来制作各种不同的“问候语”。
 * 上面的例子把Greeting组件写在JSX语句中，用法和内置组件并无二致。
 */
class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

class MessageBox extends Component{
    render(){
        return(
            <Text>content:{this.props.content}</Text>
        );
    }
}

export default class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                {/*<Greeting name='Rexxar' />*/}
                {/*<Greeting name='Jaina' />*/}
                {/*<Greeting name='Valeera' />*/}
                <MessageBox content='chalie' />
            </View>
        );
    }
}
