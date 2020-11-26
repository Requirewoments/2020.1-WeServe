import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'

import MessageCard from '../components/MessageCard'

class MessagesIndex extends Component {

    name = 'Cleber'
    lastmessage = "koe bb vc lembro de comprar o pepino, hj a noite vai se 🔥🔥🔥 😈 😈 😈 "

    render() {
        return (
        <ScrollView style={styles.container}>
            <MessageCard
                name={this.name}
                lastmessage={this.lastmessage}/>
            <MessageCard
                name={this.name}
                lastmessage={this.lastmessage}/>
            <MessageCard
                name={this.name}
                lastmessage={this.lastmessage}/>
            <MessageCard
                name={this.name}
                lastmessage={this.lastmessage}/>
            <MessageCard
                name={this.name}
                lastmessage={this.lastmessage}/>
            <MessageCard
                name={this.name}
                lastmessage={this.lastmessage}/>
            <MessageCard
                name={this.name}
                lastmessage={this.lastmessage}/>
            <MessageCard
                name={this.name}
                lastmessage={this.lastmessage}/>
            <MessageCard
                name={this.name}
                lastmessage={this.lastmessage}/>
            <MessageCard
                name={this.name}
                lastmessage={this.lastmessage}/>
            <MessageCard
                name={this.name}
                lastmessage={this.lastmessage}/>
            <MessageCard
                name={this.name}
                lastmessage={this.lastmessage}/>
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