import axios from 'axios';

class QuestionService {
    async getListQuestion(){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.get("http://appquizz-env.eba-ymije3fm.us-east-1.elasticbeanstalk.com/api/questions", {
            headers : {
                'Authorization': AuthStr
            }
        })
    }

    async createQuestion(question, questionType, partId){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.post("http://appquizz-env.eba-ymije3fm.us-east-1.elasticbeanstalk.com/api/questions", question,
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

    async getListQuestionByPart(partId){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.get("http://appquizz-env.eba-ymije3fm.us-east-1.elasticbeanstalk.com/api/parts/"+partId+"/questions", {
            headers : {
                'Authorization': AuthStr
            }
        })
    }

    async getListQuestionByExamId(id){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.get("http://appquizz-env.eba-ymije3fm.us-east-1.elasticbeanstalk.com/api/exam/"+id+"/question-text", {
            headers : {
                'Authorization': AuthStr
            }
        })
    }

}

export default new QuestionService();