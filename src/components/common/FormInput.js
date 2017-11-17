import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default class FormInput extends Component {
    render() {
        const { label, placeholder, value, onChangeText, secureTextEntry } = this.props

        return (
            <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
                <TextInput 
                    style={styles.textInput}
                    value={value}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType='next'
                    secureTextEntry={secureTextEntry}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    textInput: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
    },
    container: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export { FormInput };