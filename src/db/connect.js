const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_CONNECTION_STRING;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const connectToMongoDB = async () => {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB! 🍀🍀🍀");
  } catch (error) {
    console.error("Error in Connecting to MongoDB:", error);
  }
}

const closeMongoDBConnection = async () => {
  await client.close();
  console.log('Closed MongoDB connection 🍁🍁🍁');
}

module.exports = { client, connectToMongoDB, closeMongoDBConnection };
