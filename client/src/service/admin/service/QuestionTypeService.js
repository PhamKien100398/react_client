import axios from 'axios';

class QuestionTypeService {
    async getListQuestionType(){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.get("http://appquizz-env.eba-ymije3fm.us-east-1.elasticbeanstalk.com/api/question-types", {
            headers : {
                'Authorization': AuthStr
            }
        })
    }
}

export default new QuestionTypeService();