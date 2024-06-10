require('dotenv').config();
const express = require('express');
const app = express();
const pool = require('./db');
const handleRequest = require('./handleRequest')

const port = process.env.SERVER_PORT || 3000;

pool.connect((err) => {
    if (err) {
        console.error('Error connecting to the PostgreSQL database', err.stack);
    } else {
        console.log('Connected to the PostgreSQL database');
    }
});

app.all('/test', handleRequest);
// app.get('/test', (req, res) => {
//     try {
//         console.log('This is GET method');
//         res.send('This is GET method');
//     } catch (error) {
//         console.error('Error in GET route:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });


// app.post('/test', (req, res) => {
//     try {
//         console.log('This is POST method');
//         res.send('This is POST method');
//     } catch (error) {
//         console.error('Error in POST route:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });


// app.put('/test', (req, res) => {
//     try {
//         console.log('This is PUT method');
//         res.send('This is PUT method');
//     } catch (error) {
//         console.error('Error in PUT route:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
