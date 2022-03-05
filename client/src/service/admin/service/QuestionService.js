import axios from 'axios';

class QuestionService {
    async getListQuestion(){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.get("http://localhost:8082/api/questions", {
            headers : {
                'Authorization': AuthStr
            }
        })
    }

    async createQuestion(question, questionType, partId){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.post("http://localhost:8082/api/questions", question,
        {
            params:{
                'questionType': questionType,
                'partId': partId
            },
            headers : {
                'Authorization': AuthStr
            }
        })
    }
}

export default new QuestionService();