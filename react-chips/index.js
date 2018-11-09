/**
 * @author Ramprasath R <ramprasath25@gmail.com>
 */
import React from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import Chips from './chips';

class ReactChipsInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: false,
            chips: (props.initialChips) ? props.initialChips : [],
            inputText: ''
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            chips: (nextProps.initialChips) ? nextProps.initialChips : []
        });
    }
    handleFocus = () => { this.setState({ isFocused: true }) }
    handleChangeText = (text) => { this.setState({ inputText: text }) }
    removeChip = (index) => {
        const newArray = [...this.state.chips]
        newArray.splice(index, 1);
        this.setState({
            chips: newArray
        }, () => this.props.onChangeChips && this.props.onChangeChips(this.state.chips));
        if (this.props.alertRequired) Alert.alert('', 'Removed Successfully')
    }
    handleBlur = () => {
        if (this.state.inputText !== '' && this.state.chips.indexOf(this.state.inputText) === -1) {
            this.setState({
                chips: [...this.state.chips, this.state.inputText],
                inputText: "",
                isFocused: false
            }, () => this.props.onChangeChips && this.props.onChangeChips(this.state.chips));
            if (this.props.alertRequired) Alert.alert('', 'Added Successfully');
        } else {
            this.setState({
                inputText: "",
                isFocused: false
            }, () => this.props.onChangeChips && this.props.onChangeChips(this.state.chips))
            if (this.props.alertRequired) Alert.alert('Added Successfully', 'Chip Element already present');
        }
    }
    render() {
        const { label, chipStyle } = this.props;
        const inputLabel = (label) ? label : 'Enter your text'
        const { isFocused, inputText } = this.state;
        const labelStyle = {
            position: 'absolute',
            left: 5,
            top: !isFocused ? 12 : 1,
            fontSize: !isFocused ? 20 : 14,
            color: !isFocused ? '#aaa' : '#000',
        }
        const chips = this.state.chips.map((item, index) => (
            <Chips
                key={index}
                value={item}
                chipStyle={chipStyle}
                onPress={() => this.removeChip(index)} />
        ));
        return (
            <View>
                <View style={{ paddingTop: 18, marginTop: 15 }}>
                    <Text style={labelStyle}>
                        {inputLabel}
                    </Text>
                    <TextInput
                        style={styles.textInput}
                        onFocus={this.handleFocus}
                        onChangeText={(text) => this.handleChangeText(text)}
                        onSubmitEditing={this.handleBlur}
                        value={inputText}
                    />
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
                    {chips}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textInput: {
        height: 32,
        fontSize: 20,
        padding: 7,
        color: '#000'
    }
});

export default ReactChipsInput;