import React, { Component, useContext } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import UserContext from '../context/UserContext';

export default function ProfileUser (){
    const {state, dispatch} = useContext(UserContext)
    const { user } = state

    return (
        <View style={styles.container}>
            <Image style={styles.tinyLogo} source={{ uri: user.profilePhoto }} />
            <View style={styles.textContainer}>
                <Text style={styles.textLabel}>Nome:</Text>
                <Text style={styles.text}>{user.name}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textLabel}>Email:</Text>
                <Text style={styles.text}>{user.email}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textLabel}>Username:</Text>
                <Text style={styles.text}>{user.username}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textLabel}>Membro Desde:</Text>
                <Text style={styles.text}>{user.createdAt}</Text>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 400,
    },
    container: {
        flex: 1,
        padding: 20,
    },
    textInput: {
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 15,
        marginTop: 10,
    },
    textLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
    textContainer: {
        marginBottom: 5,
    },
});
