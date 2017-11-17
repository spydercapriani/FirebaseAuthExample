import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

export default class Spinner extends Component {
    render() {
        return (
            <View style={styles.spinner}>
                <ActivityIndicator size={this.props.size || 'large'}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    spinner: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export { Spinner };