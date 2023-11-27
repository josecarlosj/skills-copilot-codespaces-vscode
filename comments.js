// Create web server application

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Load the mongoose module
const mongoose = require('mongoose');

// Set up default mongoose connection
const mongoDB = 'mongodb://localhost:27017/my_database';