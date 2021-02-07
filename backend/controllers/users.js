import express from "express";
import prisma from "@prisma/client";

import db from "../server"
/* USER ROUTES */

// User Show

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