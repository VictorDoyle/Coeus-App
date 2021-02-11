import express from "express";
import prisma from "@prisma/client";

const router = express.Router();

const db = new prisma.PrismaClient({
    log: ["info", "warn"],
    errorFormat: "pretty",
  });

// POSTS ROUTES

/* SECTION: SHOW ALL POSTS ROUTES */
router.get("/", async function (request,response){
    const posts = await db.post.findMany({
        where: {
            published: true,
        },
        include: {
            author: true,
            comments: {
                include: {
                    author: true,
                }
            },
            likes: true,
        },
    });
    response.json({ posts });
});

/* INDEX FOR ALL POSTS THAT ARENT PUBLISHED OF THAT HAVE BEEN POSTED LIVE (published=false)  */

router.get("/unpublished", async function (request,response){
    const posts = await db.post.findMany({
        where: {
            author: request.params.username
        }
    });
    response.json({ posts });
});


/* INDEX FOR ALL POSTS WHERE USER IS THE AUTHOR (FOR PROFILE POSTS SHOW PAGE)  */
router.get("/profile/:authorId", async function (request,response){
    
    const posts = await db.post.findMany({
        select: {
            title: true,
            description: true,
            category: true,
            author: true,
            comments: true,
        },
        where: {
                // request the data from user query
                authorId: Number(request.params.authorId)
            
        }
    });
    response.json({ posts });
});


/* SHOW POST ROUTE */

router.get("/:id", async function (request,response){
    const post = await db.post.findUnique({
        where: {
            id: Number(request.params.id),
        },
    });
    response.json({ post });
})

/* CREATE ROUTE */

router.post("/", async function (request, response){
    const createdPost = await db.post.create({
        data: {...request.body, authorId: request.currentUser },
    });
    // message return on create for testing
    response.json({message: 'Created Post', post: createdPost })
});

/* UPDATE ROUTE */

router.put("/:id", async function (request, response){
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

router.delete("/:id", async function (request, response) {
    const deletedPost = await db.post.delete({
        where: {
            id: Number(request.params.id),
        }
    });
      // message return on create for testing
      response.json({message: "the post has been deleted", post: deletedPost })
});


export default router