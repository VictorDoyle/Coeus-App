
class AdviceModel {

    static getDailyAdvice = () => {
        return fetch(`https://api.adviceslip.com/advice`, {
            method: "GET"
            }).then(res => res.json())
        }

    static getDailyQuote = () => {
        return fetch(`https://api.quotable.io/random`, {
            method: "GET"
        }).then(res => res.json())
    }

    
    }
    
    export default AdviceModel