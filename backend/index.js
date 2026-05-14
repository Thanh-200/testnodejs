const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get("/hello", (req, res) => {
    res.json({message: "Hello World!",
        "name": "John Doe"
    });
});

app.post("/helloName", (req, res) => {
    const data = req.body;
    res.json({name: "Tôi là "+ data.name});
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});