import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config({ path: './api.env' });



// const username = process.env.API_USERNAME;
// const password = process.env.API_PASSWORD;
// const uri = `mongodb+srv://${username}:${password}@cluster0.erdzem4.mongodb.net/?retryWrites=true&w=majority`;
const uri = process.env.MongoDB;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const coll = client.db('FitbookDB').collection('User');
    // const result = await coll.insertOne({ email: 'test@gmail.com', name: 'John', password: 12345 });
    const docs = await coll.find().toArray();
    console.log(docs);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

