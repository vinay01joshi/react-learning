import express from 'express';

import { MongoClient } from 'mongodb';

let app = express();

//app.get('/',(req,res) => res.send('Hello NodeMon!'));

app.use(express.static('public'));

app.listen(3000);

console.log(process.env.MONGO_URL);

MongoClient.connect(process.env.MONGO_URL,(err,client) => {
    if(err) throw err ;
    
    let db = client.db('reactlearning');

    db.collection("links").find({}).toArray((err,links)=>{
        if(err) throw err ;

        console.log(links);
    })
});