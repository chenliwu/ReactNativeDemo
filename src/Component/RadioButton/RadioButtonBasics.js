import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import React from 'react';
import {
    View,
    Text
} from 'react-native';


export default class RadioButtonBasics extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
        this.onSelect = this.onSelect.bind(this);
    }

    /**
     * 单选按钮点击回调事件
     * @param {} index 
     * @param {*} value 
     */
    onSelect(index, value) {
        this.setState({
            text: `Selected index: ${index} , value: ${value}`
        });

    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <RadioGroup
                    onSelect={(index, value) => this.onSelect(index, value)}>
                    <RadioButton value={'item1'} >
                        <Text>radio1</Text>
                    </RadioButton>

                    <RadioButton value={'item2'}>
                        <Text>radio2</Text>
                    </RadioButton>

                    <RadioButton value={'item3'}>
                        <Text>radio</Text>
                    </RadioButton>
                </RadioGroup>

                <Text>{this.state.text}</Text>

            </View>
        )
    }
}

