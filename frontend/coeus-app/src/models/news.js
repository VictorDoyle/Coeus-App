
class NewsModel {

static getWeeklyNews = () => {
    return fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=G4Jw2SsGqAhJhbYNZ9N2AdYSO8aS4Thr`, {
        method: "GET"
        }).then(res => res.json())
    }
}

export default NewsModel