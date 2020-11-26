import React, { Component } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'

import ServiceCard from '../components/ServiceCard'
import HomePageActionButton from '../components/HomePageActionButton'

class Services extends Component {

    constructor(props) {
        super(props)

        this.state = {
            services: []
        }
    }

    componentDidMount() {
        this.fetchServices()
    }

    fetchServices() {
        let services = [
            {
                id: 23,
                title: 'Limpa-pscina do cleber',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
                service: 'Limpeza',
                authorname: 'Clebin souza silva maria jose joao antonio pedro maria',
            },
            {
                id: 25,
                title: 'Entrego coisas',
                description: "dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into elect",
                service: 'Delivery (até 1 quilo, à pé)',
                authorname: 'Vitin joao antonio pedro maria',
            },
            {
                id: 32,
                title: 'Vendo drogas por você!',
                description: " industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into elect",
                service: 'Mercado de substâncias ilícitas',
                authorname: 'marcelo maria jose joao antonio pedro maria',
            },
            {
                id: 81,
                title: 'Musico passando fome',
                description: " industry. Lorem Ipsum has been the industry's standard book. It has survived not only five centuries, but also the leap into elect",
                service: 'Faço qualquer coisa por dinheiro',
                authorname: 'Mario maria jose joao antonio pedro maria',
            },
            {
                id: 2123213,
                title: 'Artes cênicas?',
                description: "make a type specimen book. It has survived not only five centuries, but also the leap into elect",
                service: 'Serviços sexuais',
                authorname: 'Pedrin souza silva maria jose joao antonio pedro maria',
            },
            {
                id: 0,
                title: 'Limpo ar condicionado e desovo corpos',
                description: "1500s, when an unknown printer took a galley five centuries, but also the leap into elect",
                service: 'Desovamento de corpos (humano)',
                authorname: 'XxX6996jose6969XxX',
            },
        ]

        this.setState({ services: services })
    }

    render() {
        return (
        <ScrollView style={styles.container}>
            <View style={styles.createservicebutton}>
                <HomePageActionButton
                    title="Criar/Solicitar serviço"
                    onPress={() => this.props.navigation.navigate('ServiceSubmit')}
                    />
            </View>
            <View style={styles.horizontalDivider}></View>
            {
                this.state.services.map(e => {
                    return (
                        <ServiceCard
                            title={e.title}
                            authorname={e.authorname}
                            service={e.service}
                            description={e.description}
                            id={e.id}
                            key={e.id}/>
                    )
                })
            }
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        backgroundColor: '#fafafa'
    },
    createservicebutton: {
        paddingVertical: 10,
    },
    horizontalDivider: {
        marginVertical: 10,
        borderBottomColor: '#bababa',
        borderBottomWidth: 1,
        marginHorizontal: 15
    }
})

export default Services