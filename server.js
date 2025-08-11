const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require('./config/db');
connectDB();

//routes

app.use('/api/files', require('./routes/files'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});