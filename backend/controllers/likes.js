import express from "express";
import prisma from "@prisma/client";

const router = express.Router();

const db = new prisma.PrismaClient({
    log: ["info", "warn"],
    errorFormat: "pretty",
  });

/* Get all likes */

router.get("/", async function (request,response){
    const likes = await db.like.findMany({
        include: {
            authorId: true,
            postId: true,
        },
    });
    response.json({ likes });
});

/* Create the like */

router.post("/", async function (request,response){
    const { authorId, id } = request.body
    const createdLike = await db.like.create({
        data: {
            authorId,
            postId: id,
        }
      
    });
    response.json({message: 'Like was registered', like: createdLike });
});

/* Delete the route */

router.delete("/:id", async function (request, response) {
    const deletedLike = await db.like.delete({
        where: {
            id: Number(request.params.id),
        }
    });
      // message return on create for testing
      response.json({message: "the user's like was removed", like: deletedLike })
});


export default router