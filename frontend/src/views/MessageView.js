import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'

import Message from '../components/Message'

class MessagesIndex extends Component {

    name = 'Where can I get some work and sutff'
    lastmessage = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into elect"

    render() {
        return (
        <ScrollView style={styles.container}>
            <Message
                content={this.content}
                date={this.date}/>
            <Message
                content={this.content}
                date={this.date}/>
            <Message
                content={this.content}
                date={this.date}/>
            <Message
                content={this.content}
                date={this.date}/>
            <Message
                content={this.content}
                date={this.date}/>
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

export default MessagesIndex