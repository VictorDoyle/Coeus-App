import express from "express";
import prisma from "@prisma/client";
const router = express.Router();
import * as db from "../server.js"
/* USER ROUTES */

// User Show

router.get("/api/v1/users/:id", async function(request, response){
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