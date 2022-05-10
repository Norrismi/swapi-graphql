const express = require('express');

const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());


app.get("/", cors(), async (req, res) => {
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Mary', lastName: 'Sue'},
        {id: 3, firstName: 'Mark', lastName: 'Lynn'},
    ];
    res.json(customers);

    // res.send("This is working")
});


app.listen(port, () => console.log(`Listening at http://localhost:${port}`));