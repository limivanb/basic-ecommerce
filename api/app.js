const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const { SuppliersRouter } = require("./suppliers");


app.get("/", (req, res) => {
    console.log("Test")
    res.send("Hello")
})

app.listen(4000, () =>{
    console.log("Server is up on port 4000")
  })

  
app.use("/api/suppliers", SuppliersRouter);