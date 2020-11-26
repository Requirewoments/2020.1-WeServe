import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'

class HomePageButton extends Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.buttoncontainer}
                onPress={this.props.onPress}
                underlayColor="#16b1d0">
                <Text style={styles.buttontext}>
                    {this.props.title}
                </Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    buttoncontainer: {
        backgroundColor: '#26c1e0',
        borderRadius: 100,
        minHeight: 50,
        marginHorizontal: 30,
        padding: 5,
        marginTop: 10,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    buttontext: {
        fontSize: 17,
        paddingHorizontal: 10,
        fontFamily: 'Raleway-Bold',
        textAlign: 'center',
        marginBottom: 5,
        color: '#fafafa'
    },
})

export default HomePageButton