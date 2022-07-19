import axios from 'axios';

class ExamService {
    async getExamList(){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.get("http://appquizz-env.eba-ymije3fm.us-east-1.elasticbeanstalk.com/api/exams", {
            headers : {
                'Authorization': AuthStr 
            }
        })
    }

    async createExam(exam, intakeId, partId, locked){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.post("http://appquizz-env.eba-ymije3fm.us-east-1.elasticbeanstalk.com/api/exams", exam, 
        {
            params:{
                'intakeId': intakeId,
                'partId': partId,
                'locked': locked
            },
            headers : {
                'Authorization': AuthStr 
            }
        })
    }

    async cancelExam(id){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.get("http://appquizz-env.eba-ymije3fm.us-east-1.elasticbeanstalk.com/api/exams/"+id+"/cancel",
        {
            headers : {
                'Authorization': AuthStr 
            }
        })
    }

    async getExam(id){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.get("http://appquizz-env.eba-ymije3fm.us-east-1.elasticbeanstalk.com/api/exams/"+id,
        {
            headers : {
                'Authorization': AuthStr 
            }
        })
    }

}

export default new ExamService();