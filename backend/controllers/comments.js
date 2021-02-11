import express from "express";
import prisma from "@prisma/client";

const router = express.Router();

const db = new prisma.PrismaClient({
    log: ["info", "warn"],
    errorFormat: "pretty",
  });

/* get all comments */
router.get("/", async function (request,response){
    const comments = await db.comment.findMany({
        include: {
            author: true,
            authorId: true,
            content: true,
            postId: true,
        },
    });
    response.json({ comments });
});

/* create comments */
router.post("/", async function (request, response){
    const createdComment = await db.comment.create({
        data: {...request.body,
            authorId: request.currentUser,
         },
    });
    // message return on create for testing
    response.json({message: 'Created Comment', comment: createdComment })
});

/* update your comment (post mvp) */ 

router.put("/:id", async function (request, response){
    const updatedComment = await db.comment.update({
        where: {
            id: Number(request.params.id)
        },
        data: request.body,
    });
    // message return on create for testing
    response.json({message: "the comment was updated", comment: updatedComment })
});

/* delete comments*/

router.delete("/:id", async function (request, response) {
    const deletedComment = await db.comment.delete({
        where: {
            id: Number(request.params.id),
        }
    });
      // message return on create for testing
      response.json({message: "the comment has been deleted", comment: deletedComment })
});



export default router