import dotenv from "dotenv"

dotenv.config(); 

const newsAPI = process.env.NewsApiKey

class NewsModel {

static getWeeklyNews = () => {
    return fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${newsAPI}`, {
        method: "GET"
        }).then(res => res.json())
    }
}

export default NewsModel