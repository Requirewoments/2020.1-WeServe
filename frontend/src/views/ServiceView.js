import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'

class ServiceView extends Component {

    title = 'Where can I get some work and sutff'
    description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into elect"

    render() {
        return (
        <ScrollView style={styles.container}>
            <Text>serviço</Text> 
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        backgroundColor: '#fafafa'
    }
})

export default ServiceView