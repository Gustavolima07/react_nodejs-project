const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

let fruits = ['apple', 'banana', 'cherry', 'pineapple'];

app.get('/api', (req, res) => {
    res.json({ fruits });
});

app.post('/api', (req, res) => {
    const { fruit } = req.body;
    fruits.push (fruit);
    res.json({ success: true, fruits });
});

app.listen(8080, () => { 
    console.log('Server is running on http://localhost:8080');
});
