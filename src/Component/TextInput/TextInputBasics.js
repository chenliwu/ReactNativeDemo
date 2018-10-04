import React from 'react';
import {
	View,
	TextInput,
	Button
} from 'react-native';

/**
 * 
 */
export default class TextInputBasics extends React.Component {

	constructor(props) {
		super(props);
		//记录文本输入框的输入的内容
		this.state = {
			inputText: '',
		}
	}

	render() {
		return (
			<View>
				<TextInput placeholder="文本输入框提示语" onChangeText={(text) => {
					this.setState({
						inputText: text,
					})
				}}></TextInput>
				<Button title="显示输入内容" onPress={() => {
					alert(this.state.inputText)
				}}></Button>
			</View>
		)
	}
}
