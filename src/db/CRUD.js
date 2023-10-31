const { client } = require("./connect");
const { ObjectId } = require('mongodb');

async function createBook( title, author, summary) {
  const db = client.db('Book_Management_DB');
  const collection = db.collection('Book_App');
  try {
    const result = await collection.insertOne({
      Title: title,
      Author: author,
      Summary: summary,
    });

    console.log(`Inserted document with ID: ${result.insertedId}`);
  } catch (error) {
    console.error("Error inserting document:", error);
  }
}

async function findBooks() {
  const db = client.db("Book_Management_DB");
  const collection = db.collection("Book_App");

  try {
    const books = await collection.find({}).toArray();
    return books;
  } catch (error) {
    console.error("Error finding documents:", error);
  }
}

async function findBookById(id) {
  const db = client.db("Book_Management_DB");
  const collection = db.collection("Book_App");
  try {
    const book = await collection.findOne({ _id: new ObjectId(id) });
    return book;
  } catch (error) {
    console.error("Error finding documents:", error);
  }
}

async function updateBook(id, updates) {
  const db = client.db("Book_Management_DB");
  const collection = db.collection("Book_App");

  try {
    const result = await collection.updateOne({  _id: new ObjectId(id) }, { $set: updates });

    if (result.matchedCount){
      console.log(
        `Matched ${result.matchedCount} document(s) and modified ${result.modifiedCount} document(s)`
      );
      return true;
    } else {
      console.log(
        `Match not found for id ${id}`
      );
      return false;
    }
    
  } catch (error) {
    console.error("Error updating document:", error);
  }
}

async function deleteBook(id) {
  const db = client.db("Book_Management_DB");
  const collection = db.collection("Book_App");

  try {
    const result = await collection.deleteOne({  _id: new ObjectId(id) });

    if (result.deletedCount){
      console.log(`Deleted ${result.deletedCount} document(s)`);
      return true;
    } else {
      console.log(
        `Match not found for id ${id}`
      );
      return false;
    }
    
  } catch (error) {
    console.error("Error deleting document:", error);
  }
}

module.exports = {
  createBook,
  findBooks,
  findBookById,
  updateBook,
  deleteBook,
};
