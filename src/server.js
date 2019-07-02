import express from 'express';
import schema from  '../data/schema'
import GraphQLHTTP from 'express-graphql';
import { MongoClient } from 'mongodb';

let app = express();

//app.get('/',(req,res) => res.send('Hello NodeMon!'));

app.use(express.static('public'));

app.use('/graphql',GraphQLHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(3000);

console.log(process.env.MONGO_URL);

let db ;
MongoClient.connect(process.env.MONGO_URL,(err,client) => {
    if(err) console.log(err) ;
    
    db = client.db('reactlearning');

    db.collection("links").find({}).toArray((err,links)=>{
        if(err) throw err ;

        console.log(links);
    })
});

app.get('/data/links',(req,res) =>{

    db.collection("links").find({}).toArray((err,links) =>{
        if(err) throw err;

        res.json(links);
    });
});