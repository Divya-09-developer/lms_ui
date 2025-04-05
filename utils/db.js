import mongoose from 'mongoose';

const DB_URI = process.env.DB_URI;

if (!DB_URI) {
  throw new Error('Please define the DB_URI environment variable in your .env file');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const options = {
      // Removed deprecated options: useNewUrlParser and useUnifiedTopology
    };

    cached.promise = mongoose.connect(DB_URI, options).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;
