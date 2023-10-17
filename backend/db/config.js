
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ecommDashboard');

// mongoose.connect('mongodb://localhost:27017/ecommDashboard', { useNewUrlParser: true })
//   .then(() => {
//     console.log('Connected to the MongoDB server');

//     // Access the MongoDB database through mongoose.connection.db
//     const db = mongoose.connection.db;

//     // Example: Fetch the 'users' collection and perform a query
//     const usersCollection = db.collection('users');

//     usersCollection.find({}).toArray()
//       .then(users => {
//         console.log('Users retrieved:');
//         console.log(users);
//       })
//       .catch(error => {
//         console.error('Error fetching users:', error);
//       });

//     // Example: Fetch the 'products' collection and perform a query
//     const productsCollection = db.collection('products');

//     productsCollection.find({}).toArray()
//       .then(products => {
//         console.log('Products retrieved:');
//         console.log(products);
//       })
//       .catch(error => {
//         console.error('Error fetching products:', error);
//       })
//       .finally(() => {
//         mongoose.connection.close(); // Close the Mongoose connection when done
//       });
//   })
//   .catch(error => {
//     console.error('Error connecting to the MongoDB server:', error);
//   });

















// const { MongoClient } = require('mongodb');

// // Connection URL
// const url = 'mongodb://localhost:27017'; // Replace with your MongoDB server information

// // Database Name
// const dbName = 'ecommDashboard'; // Replace with your database name

// // Create a new MongoClient for the first collection
// const client1 = new MongoClient(url, { useUnifiedTopology: true });

// // Create a new MongoClient for the second collection
// const client2 = new MongoClient(url, { useUnifiedTopology: true });

// (async () => {
//   try {
//     // Connect to the first MongoDB server
//     await client1.connect();
//     console.log('Connected to the first MongoDB server');

//     // Connect to the second MongoDB server
//     await client2.connect();
//     console.log('Connected to the second MongoDB server');

//     // You can use the `client1` and `client2` to interact with the databases

//     // Example: Fetch collections and perform queries
//     const db1 = client1.db(dbName);
//     const collection1 = db1.collection('users'); // Replace with your first collection name

//     const db2 = client2.db(dbName);
//     const collection2 = db2.collection('products'); // Replace with your second collection name

//     const docs1 = await collection1.find({}).toArray();
//     const docs2 = await collection2.find({}).toArray();

//     console.log('Documents retrieved from collection1:');
//     console.log(docs1);

//     console.log('Documents retrieved from collection2:');
//     console.log(docs2);
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   } finally {
//     // Close both connections when done
//     client1.close();
//     client2.close();
//   }
// })();








// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/ecommDashboard');



// mongoose.connect('mongodb://localhost:27017/ecommDashboard')
//   .then(() => {
//     console.log('Connected to the MongoDB server');

//     // You can use the `client` to interact with the database

//     // Example: Fetch a collection and perform a query
//     const db = mongoose.db('ecommDashboard');
//     const collection = db.collection('users'); // Replace with your collection name

//     collection.find({}).toArray()
//       .then(docs => {
//         console.log('Documents retrieved:');
//         console.log(docs);
//       })
//       .catch(error => {
//         console.error('Error fetching documents:', error);
//       })
//       .finally(() => {
//         client.close(); // Close the connection when done
//       });
//   });

// mongodb://localhost:27017/e-comm
// mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1/ecommDashboard

// mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1





// const { MongoClient } = require('mongodb');

// // Connection URL
// const url = 'mongodb://localhost:27017'; // Replace with your MongoDB server information

// // Database Name
// const dbName = 'ecommDashboard'; // Replace with your database name

// // Create a new MongoClient
// const client = new MongoClient(url, { useUnifiedTopology: true });

// // Connect to the MongoDB server
// client.connect()
//   .then(() => {
//     console.log('Connected to the MongoDB server');

//     // You can use the `client` to interact with the database

//     // Example: Fetch a collection and perform a query
//     const db = client.db(dbName);
//     const collection = db.collection('users'); // Replace with your collection name

//     collection.find({}).toArray()
//       .then(docs => {
//         console.log('Documents retrieved:');
//         console.log(docs);
//       })
//       .catch(error => {
//         console.error('Error fetching documents:', error);
//       })
//       .finally(() => {
//         client.close(); // Close the connection when done
//       });



//     const db = client.db(dbName);
//     const collection = db.collection('users'); // Replace with your collection name

//     collection.find({}).toArray()
//       .then(docs => {
//         console.log('Documents retrieved:');
//         console.log(docs);
//       })
//       .catch(error => {
//         console.error('Error fetching documents:', error);
//       })
//       .finally(() => {
//         client.close(); // Close the connection when done
//       });
//   })
//   .catch(error => {
//     console.error('Error connecting to MongoDB:', error);
//   });