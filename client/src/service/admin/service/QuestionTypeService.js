import axios from 'axios';

class QuestionTypeService {
    async getListQuestionType(){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.get("http://localhost:8082/api/question-types", {
            headers : {
                'Authorization': AuthStr
            }
        })
    }
}

export default new QuestionTypeService();