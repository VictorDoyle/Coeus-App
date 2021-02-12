import '../testing/process.env'
const API_KEY = process.env

class NewsModel {

static getWeeklyNews = () => {
    return fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${API_KEY}`, {
        method: "GET"
        }).then(res => res.json())
    }
}

export default NewsModel