/* External Modules */
import express from "express";

/* Internal Modules/Middleware */

/* Instanced Modules */
const app = express();

/* Config */
const PORT = process.env.PORT || 4000;

/* Middleware */
app.use(express.json());

/* ROUTES */

app.get("/", function (request, response) {
    response.send("Welcome to SQL")
})

/* Sever Listener */

app.listen(PORT, function() {
    console.log(`Server is live on ${PORT}`)
});
