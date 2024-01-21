const mongoose = require('mongoose');

const connectToDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/myDb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
}
};

module.exports = connectToDb;

//old code with mongo client
// const {MongoClient} = require('mongodb')

// let dbConnection ;
// module.exports = {
//     connectToDb : (cb)=> {
//         MongoClient.connect('mongodb://localhost:27017/myDb')
//         .then((client)=>{
//             dbConnection = client.db
//             return cb()
//         }) .catch((err)=>{
//             console.log(err)
//             return cb(err)
//         })
//     } , 
//     getDb : () => dbConnection
// }