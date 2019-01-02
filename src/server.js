import express from 'express';

let app = express();

app.get('/',(req,res) => res.send('Hello NodeMon!'));

app.listen(3000);