/* External Modules */
import express from "express";
import prisma from "@prisma/client";
import cors from "cors";
/* Internal Modules/Middleware */
import path from "path";
/* ROUTES */
import postRoutes from "./controllers/posts.js"
import userRoutes from "./controllers/users.js"
import commentRoutes from './controllers/comments.js'
import likeRoutes from './controllers/likes.js'
import newsRoutes from './controllers/news.js'
import { register, login, logout } from "./controllers/auth.js"
import authRequired from './middleware/authRequired.js'
/* for heroku deployment */
import dotenv from "dotenv"

dotenv.config(); 



/* Instanced Modules */
const app = express();

const db = new prisma.PrismaClient({
    log: ["info", "warn"],
    errorFormat: "pretty",
  });
/* Config */
const PORT = process.env.PORT || 4000;

/* Heroku deployment */
const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
    //www.freecodecamp.org/news/deploy-a-react-node-app-to/
    https: app.use(express.static(path.join(__dirname, "/frontend/coeus-app/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "/frontend/coeus-app", "build", "index.html"));
    });
  } else {
    app.get("/", (req, res) => {
      res.send("api is running");
    });
  }

/* Middleware */
app.use(express.json());
app.use(cors())
/* API Routes  */
app.use('/api/v1/posts', authRequired, postRoutes);
app.use('/api/v1/users', authRequired, userRoutes);
app.use('/api/v1/comments', authRequired, commentRoutes);
app.use('/api/v1/likes', authRequired, likeRoutes);
app.use('/api/v1/register', register);
app.use('/api/v1/login', login);
app.use('/api/v1/logout', logout);
/* External Modules (api fetches) */
/* app.use('/api/v1/news', newsRoutes)
 */


app.get("/", function (request, response) {
    response.send("Welcome to SQL")
})

/* Sever Listener */

app.listen(PORT, function() {
    console.log(`Server is live on ${PORT}`)
});

