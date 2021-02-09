/* External Modules */
import express from "express";
import prisma from "@prisma/client";
import cors from "cors";
/* Internal Modules/Middleware */
/* ROUTES */
import postRoutes from "./controllers/posts.js"
import userRoutes from "./controllers/users.js"
import { register, login, logout } from "./controllers/auth.js"


/* Instanced Modules */
const app = express();

const db = new prisma.PrismaClient({
    log: ["info", "warn"],
    errorFormat: "pretty",
  });
/* Config */
const PORT = process.env.PORT || 4000;

/* Middleware */
app.use(express.json());
app.use(cors())
/* API Routes  */
app.use('/api/v1/posts', postRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/register', register);
app.use('/login', login);
app.use('/logout', logout);



app.get("/", function (request, response) {
    response.send("Welcome to SQL")
})

/* Sever Listener */

app.listen(PORT, function() {
    console.log(`Server is live on ${PORT}`)
});

