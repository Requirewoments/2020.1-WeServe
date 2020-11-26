import React, {createContext, useReducer} from 'react'

const InitialState = {
    user: {
        name: 'João Pedro',
        createdAt: '04/07/2020',
        username: 'top dos tops',
        profilePhoto: 'https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg'
    }
}

const UserContext = createContext({})

const actions = {
    updateUser(state, action){
        const n_user = action.payload
        return {
            ...state,
            user: n_user
        }
    },
}

export const UserProvider = props => {
    function reducer(state, action){
        const fn = actions[action.type]
        return fn ? fn(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, InitialState)

    return (
        <UserContext.Provider value={{state, dispatch}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext