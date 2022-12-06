import mongoose from 'mongoose'

export const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-kxagoj5-shard-00-00.urgvvgi.mongodb.net:27017,ac-kxagoj5-shard-00-01.urgvvgi.mongodb.net:27017,ac-kxagoj5-shard-00-02.urgvvgi.mongodb.net:27017/?ssl=true&replicaSet=atlas-nc4kry-shard-0&authSource=admin&retryWrites=true&w=majority`
    // console.log("URL", URL); 
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Successfully Connected')
    }
    catch (err) {
        console.log(`Error while connecting with atlas db in Connection db.js `, err.message)
    }
}

export default Connection