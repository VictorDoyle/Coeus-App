/* External Modules */
import express from "express";
import prisma from "@prisma/client";
import cors from "cors";
/* Internal Modules/Middleware */

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
/* app.use('/api/v1/posts', routes.posts);
 */
/* ROUTES */

app.get("/", function (request, response) {
    response.send("Welcome to SQL")
})

/* Sever Listener */

app.listen(PORT, function() {
    console.log(`Server is live on ${PORT}`)
});


/* FIXME: Refactor into controllers */

/* SECTION: POST ROUTES */
app.get("/api/v1/posts", async function (request,response){
    const posts = await db.post.findMany({
        where: {
            published: true,
            description: {
                contains: request.query.description,
            },
        },
        include: {
            author: true,
        },
    });
    response.json({ posts });
});

/* INDEX FOR ALL POSTS THAT ARENT PUBLISHED OF THAT HAVE BEEN POSTED LIVE (published=false)  */
/* TODO: Test/Implement after MVP completion */
/* router.get("/api/v1/posts", async function (request,response){
    const posts = await db.post.findMany({
        where: {
            published: false,
        }
    });
    response.json({ posts });
}); */


/* INDEX FOR ALL POSTS WHERE CONTENT IS FILTERED SPECIFICALLY VIA DESCRIPTION  */
app.get("/api/v1/posts", async function (request,response){
    const posts = await db.post.findMany({
        select: {
            title: true,
            description: true,
            category: true,
        },
        where: {
            description: {
                // request the data from user query
                contains: request.query.description
            }
        }
    });
    response.json({ posts });
});

/* SHOW POST ROUTE */

app.get("/api/v1/posts/:id", async function (request,response){
    const post = await db.post.findUnique({
        where: {
            id: Number(request.params.id),
        },
    });
    response.json({ post });
})

/* CREATE ROUTE */

app.post("/api/v1/posts", async function (request, response){
    const createdPost = await db.post.create({
        data: request.body,
    });
    // message return on create for testing
    response.json({message: 'Created Post', post: createdPost })
});

/* UPDATE ROUTE */

app.put("/api/v1/posts/:id", async function (request, response){
    const updatedPost = await db.post.update({
        where: {
            id: Number(request.params.id)
        },
        data: request.body,
    });
    // message return on create for testing
    response.json({message: "the post has been updated", post: updatedPost })
});

/* DELETE ROUTE */

app.delete("/api/v1/posts/:id", async function (request, response) {
    const deletedPost = await db.post.delete({
        where: {
            id: Number(request.params.id),
        }
    });
      // message return on create for testing
      response.json({message: "the post has been deleted", post: deletedPost })
});

/* SECTION: USER ROUTES */


app.get("/api/v1/users/:id", async function(request, response){
    const user = await db.user.findUnique({
        where: {
            id: Number(request.params.id)
        },
        include: {
            posts: {
                select: {
                    title: true,
                    description: true,
                }
            },
        },
    });
    // json response for testing
    response.json({user})
})