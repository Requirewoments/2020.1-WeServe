import React, { createContext, useReducer } from 'react'
import Globals from './Globals'

const InitialState = {
    user: {
        name: 'João Pedro',
        createdAt: '04/07/2020',
        username: 'top dos tops',
        profilePhoto: 'https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg',
        password: 'as32AA',
        birthday: '',
        email: 'algo',
    }
}

const UserContext = createContext({})

const actions = {
    updateUser(state, action) {
        const n_user = action.payload
        return {
            ...state,
            user: n_user
        }
    },
}

function createUser(user) {
    const url_request = Globals.server_ip + '/user'
    fetch(url_request, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: user.name,
            email: user.email,
            password: user.password,
        })
    }).then((e) => console.warn(e.status)).catch((e) => console.warn(e));
}

export const UserProvider = props => {
    function reducer(state, action) {
        const fn = actions[action.type]
        return fn ? fn(state, action) : state
    }

    
    const [state, dispatch] = useReducer(reducer, InitialState)
    createUser(state.user)

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext