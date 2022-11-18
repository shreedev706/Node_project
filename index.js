const express = require('express')
const app = express()
const port = 5000;

app.get("/", (req, resp) => {
    resp.send(
        '<h1>Welcome to Home page</h1> <a href="/About">Go to about page</a>  '


    );
})

app.get("/About", (req, resp) => {
    resp.send(
        ' <h1>welcome to about page</h1> <a href="/">Go to home page</a>'
    );
})

app.listen(port, () => {
    console.log('Listening at ${port}')
})