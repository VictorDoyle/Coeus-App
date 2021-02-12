import express from "express";
import prisma from "@prisma/client";
const router = express.Router();


const db = new prisma.PrismaClient({
    log: ["info", "warn"],
    errorFormat: "pretty",
  });

/* SECTION: USER ROUTES */

/* INDEX FOR ALL USERS ROUTE */
router.get("/", async function (request,response){
    const users = await db.user.findMany({
        include: {
            posts: {
                select: {
                    title: true,
                    description: true,
                }
            },
        },
    });
    response.json({ users });
});


/* SHOW CURRENT LOGGED IN  ROUTE */
router.get("/verify", async function(request, response){
    const user = await db.user.findUnique({
        where: {
            id: Number(request.currentUser)
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

/* UPDATE USER ROUTE */

router.put("/edit", async function (request, response){
    console.log(request.body)
    const updatedUser = await db.user.update({
        where: {
            id: Number(request.currentUser)
        },
        data: request.body,
    });
    // message return on create for testing
    response.json({message: "the User has been updated", user: updatedUser })
});


/* SHOW ONE USER BY ID ROUTE */
router.get("/:id", async function(request, response){
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

/* CREATE USER ROUTE */

router.post("/", async function (request, response){
    const createdUser = await db.user.create({
        data: request.body,
    });
    // message return on create for testing
    response.json({message: 'The User was created', user: createdUser })
});


/* DELETE ROUTE */
/* FIXME: need to add:

const deleteUserPosts = await.db.post.deleteMany({
  where: {
    authorId: deletedUser.id,
  },
})

*/
router.delete("/delete/:id", async function (request, response) {
    const deleteUserLikes = await db.like.deleteMany({
        where: {
          authorId: Number(request.currentUser),
        },
      });
    const deleteUserComments = await db.comment.deleteMany({
        where: {
          authorId: Number(request.currentUser),
        },
      });
    const deleteUserPosts = await db.post.deleteMany({
        where: {
          authorId: Number(request.currentUser),
        },
      });
    const deletedUser = await db.user.delete({
        where: {
            id: Number(request.currentUser),
        }
    });
      // message return on create for testing
      response.json({message: "the user and their posts have been deleted", user: deletedUser, posts: deleteUserPosts, comments: deleteUserComments, likes: deleteUserLikes })
});

export default router