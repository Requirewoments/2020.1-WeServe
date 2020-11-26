import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

function truncate(str, n){
    return (str.length > n) ? str.substr(0, n-1) : str;
};

class ServiceCard extends Component {
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.title}>{this.props.title}</Text>
            <View style={styles.horizontalDivider}/>
            <Text style={styles.description}>{truncate(this.props.description, 100)}</Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eaeafa',
        marginHorizontal: 10,
        padding: 5,
        marginTop: 10
    },
    title: {
        fontSize: 17,
        textAlign: 'right',
        paddingHorizontal: 10,
        fontFamily: 'Raleway-Bold',
        marginBottom: 5
    },
    description: {
        paddingHorizontal: 10,
        fontSize: 14,
        fontFamily: 'Raleway-Medium'
    },
    horizontalDivider: {
        borderBottomColor: '#bababa',
        borderBottomWidth: 1,
        marginHorizontal: 10
    }
})

export default ServiceCard