/**
 * @author Ramprasath R <ramprasath25@gmail.com>
 */
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Chips = (props) => {
    const { value, onPress, chipStyle } = props;
    return (
        <TouchableOpacity style={[styles.chip, chipStyle]} onPress={onPress}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[{ paddingHorizontal: 5 }]}>{value}</Text>
                <View style={styles.chipCloseBtn}><Text style={styles.chipCloseBtnTxt}>x</Text></View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    chip: {
        borderColor: '#848787',
        borderWidth: 1,
        margin: 4,
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 15
    },
    chipCloseBtn: {
        borderRadius: 8,
        width: 16,
        height: 16,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center'
    },
    chipCloseBtnTxt: {
        color: '#555',
        paddingBottom: 3
    }
})

export default Chips;