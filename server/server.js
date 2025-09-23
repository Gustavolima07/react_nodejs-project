const express = require('express');
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"]
};

app.use(cors(corsOptions));

app.get('/api', (req, res) => {
    res.json({ fruits: ['apple', 'banana', 'cherry', 'pineapple'] }) //Teste da api, não utilizaremos frutas para um site de finanças. O escambo n existe mais :(
    
});

app.listen(8080, () => { 
    console.log('Server is running on http://localhost:8080');
});