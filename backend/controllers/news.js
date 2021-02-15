import express from "express";
import prisma from "@prisma/client";
import dotenv from "dotenv";
const router = express.Router();
/* api key for NY Times */
dotenv.config()
/* const NY_TIMES_API_KEY = process.env.NY_TIMES_API_KEY
 */
const db = new prisma.PrismaClient({
    log: ["info", "warn"],
    errorFormat: "pretty",
  });

/* Fetch all news */

/* router.get("/", async function (request,response){
    
    response.json({ posts });
}); */

/* Fetch weekly 20 top read articles */

router.get("/", async function(request, response) {
    
})


/* used in front end route */
/* static getWeeklyNews = () => {
    return fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${NY_TIMES_API_KEY}`, {
        method: "GET"
        }).then(res => res.json())
    }
}
 */

export default router