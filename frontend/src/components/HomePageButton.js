import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'

class HomePageButton extends Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.buttoncontainer}
                onPress={this.props.onPress}
                underlayColor="white">
                <Text style={styles.buttontext}>
                    {this.props.title}
                </Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    buttoncontainer: {
        backgroundColor: '#eaeafa',
        marginHorizontal: 10,
        padding: 5,
        marginTop: 10
    },
    buttontext: {
        fontSize: 17,
        paddingHorizontal: 10,
        fontFamily: 'Raleway-Bold',
        textAlign: 'center',
        marginBottom: 5
    },
})

export default HomePageButton