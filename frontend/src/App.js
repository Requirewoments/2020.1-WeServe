import React from 'react';
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Icon } from 'react-native-elements';

// CRUD Serviços
import ServicesIndex from './views/ServicesIndex'
import ServiceView from './views/ServiceView'
import ServiceSubmit from './views/ServiceSubmit'

// CRUD User
import ProfileUser from './views/ProfileUser';
import UpdateUser from './views/UpdateUser';

// CRUD Messages
import MessagesIndex from './views/MessagesIndex'
import MessageView from './views/MessageView'

// Context user
import { UserProvider } from './context/UserContext';

const Stack = createStackNavigator();

export default (props) => {
    return (
        <UserProvider style={{fontFamily: 'Raleway-Normal'}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="ServicesIndex">
                    <Stack.Screen
                        name="ProfileUser"
                        component={ProfileUser}
                        options={title.profileUser}
                    />
                    <Stack.Screen
                        name="UpdateUser"
                        component={UpdateUser}
                        options={title.updateUser}
                    />
                    <Stack.Screen
                        name="ServicesIndex"
                        component={ServicesIndex}
                        options={title.ServicesIndex}
                    />
                    <Stack.Screen
                        name="ServiceView"
                        component={ServiceView}
                        options={title.ServiceView}
                    />
                    <Stack.Screen
                        name="ServiceSubmit"
                        component={ServiceSubmit}
                        options={title.ServiceSubmit}
                    />
                    <Stack.Screen
                        name="MessagesIndex"
                        component={MessagesIndex}
                        options={title.MessagesIndex}
                    />
                    <Stack.Screen
                        name="MessageView"
                        component={MessageView}
                        options={title.MessageView}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UserProvider>
    );
};

const title = {
    profileUser: ({ navigation }) => {
        return {
            title: 'Perfil de usuário',
            headerTitleStyle: {
            marginLeft: 15,
            fontSize: 25,
            fontFamily: 'Raleway-Normal'
            },
            headerRight: () => (
                <Button
                    onPress={() => navigation.navigate('UpdateUser')}
                    type='clear'
                    icon={<Icon name='edit' color='#000000'/> }
                />
            ),
        }
    },
    updateUser: ({ navigation }) => {
        return {
            title: 'Atualizar cadastro',
            headerTitleStyle: {
                marginLeft: 15,
                fontSize: 25,
                fontFamily: 'Raleway-Normal'
            },
            headerLeft: () => (
                <Button
                    onPress={() => navigation.goBack()}
                    type='clear'
                    icon={<Icon name='close' color='#85bec9'/> }
                />
            ),
        }
    },
    ServicesIndex: ({ navigation }) => {
        return {
            title: 'WeServe',
            headerTitleStyle: {
                alignSelf: 'center',
                fontSize: 25,
                fontFamily: 'Raleway-Normal'
            },
            headerLeft: () => (
                <View style={{flexDirection: 'row', marginLeft: 10}}>
                <Button
                    onPress={() => navigation.navigate('MessagesIndex')}
                    type='clear'
                    icon={<Icon name='message' color='#26c1e0'/> }/>
                </View>
            ),
            headerRight: () => (
                <View style={{flexDirection: 'row', marginLeft: 10}}>
                <Button
                    onPress={() => navigation.navigate('ProfileUser')}
                    type='clear'
                    icon={<Icon name='account-circle' color='#26c1e0'/> }/>
                </View>
            ),
        }
    },
    ServiceView: {
        title: 'Serviço'
    },
    ServiceSubmit: {
        title: 'Criar Serviço'
    },
    MessagesIndex: {
        title: 'Suas mensagens'
    },
    MessageView: {
        title: 'Mensagens'
    },
};
