import dotenv from "dotenv"

dotenv.config();


class NewsModel {

static getWeeklyNews = () => {
    return fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${process.env.newsapikey}`, {
        method: "GET"
        }).then(res => res.json())
    }
}

export default NewsModel