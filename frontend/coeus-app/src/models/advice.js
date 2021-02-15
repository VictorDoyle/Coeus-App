
class AdviceModel {

    static getDailyAdvice = () => {
        return fetch(`https://api.adviceslip.com/advice`, {
            method: "GET"
            }).then(res => res.json())
        }
    }
    
    export default AdviceModel