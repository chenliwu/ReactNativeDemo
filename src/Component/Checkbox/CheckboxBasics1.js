import CheckBox from 'react-native-check-box'
import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

export default class CheckBoxBasics1 extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
        }
    }

    onCheckBoxChang = () => {

    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <CheckBox
                    onClick={() => {
                        this.setState({
                            isChecked: !this.state.isChecked
                        })
                    }}
                    checkedCheckBoxColor="red"
                    uncheckedCheckBoxColor='gray'
                    isChecked={this.state.isChecked}
                    leftText={"CheckBox"}
                />
                <CheckBox
                    onClick={() => {
                        this.setState({
                            isChecked: !this.state.isChecked
                        })
                    }}
                    isChecked={this.state.isChecked}
                    leftText={"CheckBox"}
                />

                <CheckBox
                    onClick={() => {
                        this.setState({
                            isChecked: !this.state.isChecked
                        })
                    }}
                    isChecked={this.state.isChecked}
                    checkedImage={<Image source={require('./../../icon/selected.png')} />}
                    unCheckedImage={<Image source={require('./../../icon/unselected.png')} />}
                    leftText={"Custom  CheckBox"}
                />

            </View>
        )
    }
}