import mongoose from 'mongoose';

const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log('already connected');
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log('using previous connection');
      return;
    }
    await mongoose.disconnect();
  }
  mongoose.set('strictQuery', false);
  // const db = await mongoose.connect(process.env.MONGODB_URI);
  // const db = await mongoose.connect('mongodb://127.0.0.1/reddit-projectbd'); // you can replace the local host with 127.0.0.1
  // const db = await mongoose.connect(
  //   'mongodb://localhost:27017/reddit-projectbd'
  // );
  const db = await mongoose.connect(
    'mongodb+srv://kelvintony:qwertyuiop@cluster0.ql55m.mongodb.net/reddit-rough-db?retryWrites=true&w=majority'
  );
  console.log('new connection');
  connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('not disconnected');
    }
  }
}
function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}

const db = { connect, disconnect, convertDocToObj };

export default db;
