require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
    // Get DB URL from environment variables
    const DB_URL = process.env.MONGO_CONNECTION_URL;

    // Database connection 🥳
    mongoose.connect(DB_URL)
        .then(() => {
            console.log('✅ Database connected 🥳🥳🥳🥳');
        })
        .catch(err => {
            console.log('❌ Connection failed ☹️☹️☹️☹️');
            console.error(err);
            process.exit(1); // Exit the app if connection fails
        });
}

module.exports = connectDB;
