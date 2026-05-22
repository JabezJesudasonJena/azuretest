const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Hello Saiyed Malik Meh Jabez Hun")
})

app.listen(PORT, () => {
    console.log(`Running at ${PORT}`)
})