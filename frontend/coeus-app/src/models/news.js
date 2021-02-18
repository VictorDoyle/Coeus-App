/* NY TIMES API */
const newsAPI = process.env.REACT_APP_NewsApiKey
/* WEB SCRAPER API NEWS */
const allNewsApi = process.env.REACT_APP_AllNewsApi

class NewsModel {

static getWeeklyNews = () => {
    return fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${newsAPI}`, {
        method: "GET"
        }).then(res => res.json())
    }
}

export default NewsModel