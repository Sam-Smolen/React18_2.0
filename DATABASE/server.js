const express = require('express');
const app = express();
// import { username, password } from './credentials';
const { MongoClient, ServerApiVersion } = require('mongodb');

//mongo credentials


const mongoURI = `mongodb+srv://samsmolen:EBZHXV2CYV9sPRLz@cluster0.i3hzkyb.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(mongoURI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

// async function run(){
//     try{
//         await client.connect();
//         console.log('connected')
//     } finally {
//         await client.close();
//     }
// }
// run().catch(console.dir);



app.get('/api/users',async(req,res)=>{
  try{
      await client.connect();
      const database = client.db('myApp');
      const collection = database.collection('users');
      const query = await collection.insertOne({
          name:'Francis',
          lastname:'Jones'
      });
      console.log(query);

      res.status(200).json({awesome:'Yes'});
  } catch(error){
      throw error;
  } finally{
      await client.close();
      console.log('all is done')
  }
});


const port = process.env.PORT || 3001;
app.listen(port);
console.log(`App running on ${port}`);