const express = require('express');
const { MongoClient } = require("mongodb");
const cors = require("cors");
const multer = require("multer");

const app = express();
const PORT = 5038;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const CONNECTION_STRING = "mongodb+srv://aublisber13:ksnluvpsh2313@cluster0.yl5ogkq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const DATABASE_NAME = "MyDb";

let database;

MongoClient.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        console.error("Error connecting to MongoDB:", error);
        return;
    }
    database = client.db(DATABASE_NAME);
    console.log("Connected to Cluster 0");
});

app.get('/api/books/GetBooks', (req, res) => {
    database.collection("books").find({}).toArray((error, result) => {
        res.send(result);
    });
});

app.post('/api/books/AddBook', multer().none(), async (req, res) => {
    try {
        const numOfDocs = await database.collection("books").countDocuments();
        await database.collection("books").insertOne({
            id: (numOfDocs + 1).toString(),
            title: req.body.title,
            description: req.body.description, // Include description from request body
            price: req.body.price // Include price from request body
        });
        res.json("Added Successfully");
    } catch (error) {
        console.error("Error adding book:", error);
        res.status(500).json({ error: "Failed to add book" });
    }
});

app.put('/api/books/UpdateBook/:id', multer().none(), async (req, res) => {
    try {
        const bookId = req.params.id;
        const updatedFields = {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price
        };
        await database.collection("books").updateOne({ id: bookId }, { $set: updatedFields });
        res.json("Updated Successfully");
    } catch (error) {
        console.error("Error updating book:", error);
        res.status(500).json({ error: "Failed to update book" });
    }
});

app.delete('/api/books/DeleteBook', (req, res) => {
    database.collection("books").deleteOne({
        id: req.query.id
    });
    res.json("Deleted Successfully!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
