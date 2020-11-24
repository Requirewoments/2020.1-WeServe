const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name required!'],
    },
    username: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        require: [true, 'Email required!'],
        unique: true,
        validate: {
            validator: function(email) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
            },
            message: props => `${props.value} não é um email válido!`
        }
    },
    password: {
        type: String,
        required: [true, 'A senha é obrigatória!'],
        unique: true,
        validate: {
            validator: function (password) {
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)
            },
            message: props => `${props.value} Sua senha deve conter 6-20 caracteres, 
                entre eles no mínimo um número, uma letra maiúscula e uma minúscula.`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

mongoose.model('User', UserSchema);