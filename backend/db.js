const mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost", { useUnifiedTopology: true })
            .then(conn => global.conn = conn.db("backend"))
            .catch(err => console.log(err))
             
module.exports = { findAll, insert , findOne , update , deleteOne }

function findAll(callback){  
    global.conn.collection("services").find({}).toArray(callback);
}

function deleteOne(id, callback){
    global.conn.collection("services").deleteOne({_id: new ObjectId(id)}, callback);
}

function update(id, customer, callback){
    global.conn.collection("services").updateOne({_id: new ObjectId(id)}, {$set: customer}, callback);
}

var ObjectId = require("mongodb").ObjectId;
function findOne(id, callback){  
    global.conn.collection("services").find(new ObjectId(id)).toArray(callback);
}

function insert(customer, callback){
    global.conn.collection("services").insert(customer, callback);
}