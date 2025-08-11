require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
    // Database connection 🥳
    mongoose.connect(process.env.MONGO_CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        // No need for useCreateIndex or useFindAndModify in Mongoose 6+
    })
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
