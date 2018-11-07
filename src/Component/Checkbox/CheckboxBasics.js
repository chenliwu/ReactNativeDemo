import CheckBox from 'react-native-checkbox';
import React from 'react';
import {
    View,
    Text
} from 'react-native';

export default class CheckBoxBasics extends React.Component {


    constructor(props) {
        super(props);
    }

    onCheckBoxChang = () => {

    }

    render() {
        return (
            <View>
                <CheckBox
                    label='Label'
                    checked={true}
                    onChange={(checked) => console.log('I am checked', checked)}
                />
                <CheckBox
                    label='Labe2'
                    checked={true}
                    onChange={(checked) => console.log('I am checked', checked)}
                />
            </View>
        )
    }
}