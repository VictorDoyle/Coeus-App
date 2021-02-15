/* import NewsApiKey from '../testing/env.js'

 */

class NewsModel {

static getWeeklyNews = () => {
    return fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${NewsApiKey}`, {
        method: "GET"
        }).then(res => res.json())
    }
}

export default NewsModel