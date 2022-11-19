const express = require('express')
const app = express()
const port = 5000;
const path =require('path')
console.log(__dirname,'public');

const publicPath =path.join(__dirname,'public');
 app.use(express.static(publicPath))

app.get("/", (req, resp) => {
    resp.sendFile('${publicPath}/index.html'



    );
})

app.get("/About", (req, resp) => {
    resp.sendFile('${publicPath}/about.html'

    );
})
app.get("/contact", (req, resp) => {
    resp.sendFile('${publicPath}/contact.html'

    );
})

app.listen(port, () => {
    console.log('Listening at ${port}')
})