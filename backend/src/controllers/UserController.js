const requireDir = require('require-dir');
const {getClient} = require('./../utils/getClient');
const mongoose = require('mongoose');
requireDir('./../models');
const User = mongoose.model('User');
let client, db;

getClient().then(onfulfilled => { 
    client = onfulfilled;
    db = client.db('WeServe');
});

module.exports = {
    firstMessage(request, response) {
        return response.json('You are welcome!');
    },
    async read(request, response) {
        const user = await User.findById(request.params.id);
        return response.json(user);
    },
    async create(request, response) {
        const user = new User(request.body);
        
        try {
            await user.save();
            return response.send(`${user.name} created!\nData: ${user}`);
        } catch(error) {
            console.log(error);
        }
    },
    async update(request, response) {
        try {
            const user = await User.findByIdAndUpdate(request.params.id, request.body, { new: true });
            await user.save();
            return response.json(`User ${user.name} updated!`);
        } catch (error) {
            console.log(error);
        }
    },
    async delete(request, response){
        const user = await User.findByIdAndDelete(request.params.id);
        return response.json('User deleted!');
    }
}