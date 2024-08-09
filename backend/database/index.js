require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    const URI=process.env.MONGO_URI
    try {
        await mongoose.connect(URI);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
};

module.exports = connectDB;