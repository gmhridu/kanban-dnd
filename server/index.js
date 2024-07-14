const express = require('express');
require('dotenv').config()
const cors = require('cors');
const jwt = require('jsonwebtoken');
const ConnectDB = require('./db/db');
const cardRouter = require('./routes/card.route');



const port = process.env.PORT || 8000;
const mongoUri = process.env.MONGODB_URI;


const app = express();

// middleware

app.use(cors());
app.use(express.json());

// Connect to MongoDB

ConnectDB(mongoUri);


// routes
app.get('/', (req, res) => {
    res.json({
      message: 'Server is running'
    });
  });


  app.use('/cards', cardRouter)


// error handling
app.use((error, req, res, next) => {
    res.status(500).json({
      message: error.message || 'Internal server error'
    });
  });


// Page not found handler
app.use((req, res) => {
    res.status(404).json({
      message: 'Page not found'
    });
  });


app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
});

process.on("unhandledRejection", (error, promise)=> {
    console.log(`Error: ${error.message}`);
    server.close(() => process.exit(1));

})

