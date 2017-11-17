import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{this.props.title}</Text>
            </View>
          )
    }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
});

export { Header };