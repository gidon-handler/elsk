
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
    console.log("App running on port", server.address().port)
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

        app.post('/user', (req, res) => {

            userCollection.insertOne(req.body)
                .then(result => {
                    res.status(200).json(result)
                }).catch(error => console.error(error))

        })

        app.put('/user/:email', (req, res) => {
            
            userCollection.findOneAndUpdate(
                { email: req.params.email },
                {
                    $set: {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        gender: req.body.gender,
                        address: req.body.address,
                        phoneNumbers: req.body.phoneNumbers
                    }
                },
                {
                    upsert: true
                }
            ).then(result => {
                res.json('Success');
            }).catch(error => console.error(error))
        })

        app.delete('/user/:id', (req, res) => {
            quotesCollection.deleteOne({ name: req.params.uid })
                .then(result => {
                    res.json(`Deleted`)
                })
                .catch(error => console.error(error))
        })
    }
)



