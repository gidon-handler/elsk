
const express = require("express");
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

var server = app.listen(4210, () =>
    console.log("App now running on port", server.address().port)
);

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }).then(
    client => {

        const db = client.db('alsk');
        const userCollection = db.collection('users');


        app.get("/list", (req, res) => {
        
            userCollection.find({}).toArray().then(result => {
                res.send(result);
            })

        });

        app.post('/create', (req, res) => {

            userCollection.insertOne(req.body)
                .then(result => {
                    res.status(200).json(result)
                }).catch(error => console.error(error))

        })

        app.put('/update/:id', (req, res) => {
            console.log(req.body)
        })

        app.delete('/delete/:id', (req, res) => {
            console.log(req.body)
        })



    }
)



