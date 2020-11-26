import React, { Component, useContext, useState } from 'react'
import { Text, TextInput, View, StyleSheet, Button, Alert } from 'react-native'
import UserContext from '../context/UserContext'

export default props => {
    const { state, dispatch} = useContext(UserContext)
    const [name, setName] = useState(state.user.name)
    const [username, setUsername] = useState(state.user.username)
    const [email, setEmail] = useState(state.user.email)

    function confirmUpdate() {
        Alert.alert(
            "Confirmação:",
            "Tem certeza que deseja salvar as alterações?",
            [
                {
                    text: "Cancelar",
                },
                {
                    text: "Sair sem salvar",
                    onPress: () => props.navigation.goBack(),
                },
                {
                    text: "Confirma as alterações",
                    onPress: () => sendNewUser()
                }
            ],
        )
    }

    function sendNewUser(){
        const new_user = {
            name: name,
            username: username,
            email: email,
            createdAt: state.user.createdAt,
            profilePhoto: state.user.profilePhoto
        }
        console.warn(Object.values(new_user))
        dispatch({
            type: 'updateUser',
            payload: new_user,
        })
        props.navigation.goBack()
    }   

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.textInput}
                onChangeText={(name) => setName(name)}
                value={name}
                placeholder='Nome'
            />
            <TextInput
                style={styles.textInput}
                onChangeText={(username) => setUsername(username)}
                value={username}
                placeholder='Username'
            />
            <TextInput
                style={styles.textInput}
                onChangeText={(email) => setEmail(email)}
                value={email}
                placeholder='Email'
            />
            <Button
                title='Confirma alterações'
                style={styles.confirmButton}
                onPress={confirmUpdate}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        padding: 10,
    },
    textInput: {
        borderColor: '#000000',
        borderRadius: 5,
        height: 40,
        borderWidth: 1,
        padding: 10,
        margin: 10,
    },
    confirmButton: {

    }
})