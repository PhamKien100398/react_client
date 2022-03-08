import axios from 'axios';

class examService {
    getExam(){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return axios.get("http://appquizz-env.eba-ymije3fm.us-east-1.elasticbeanstalk.com/api/exams/list-all-by-user", {
            headers : {
                'Authorization': AuthStr 
            }
        })
    }

    getExamDetailById(id){
        const token = localStorage.getItem("jwtToken")
        const AuthStr = 'Bearer ' + token;
        return axios.get("http://appquizz-env.eba-ymije3fm.us-east-1.elasticbeanstalk.com/api/exams/exam-user/"+id, {
            headers : {
                'Authorization': AuthStr 
            }
        })

    }

    async saveUserExamAnswer(listQuestion, examId, isFinish, remainingTime){
        const data = {
            answerSheets: listQuestion
        }
        const token = localStorage.getItem("jwtToken")
        const AuthStr = 'Bearer ' + token;
        return await axios.put("http://appquizz-env.eba-ymije3fm.us-east-1.elasticbeanstalk.com/api/exams/"+examId+"/questions-by-user", listQuestion,
        {
            params:{
                isFinish: isFinish,
                remainingTime: remainingTime
            },
            headers : {
                'Authorization': AuthStr 
            }
        })
    }
}

export default new examService();