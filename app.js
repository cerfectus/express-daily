const express = require("express")

const app = express();

app.get('/', (request, response, next) => {
    response.send("hello Ironhacker")
})


app.listen(3000, () => {
    console.log("webpage")
}) 

app.use(express.static("public"))

