import axios from 'axios';

class ExamService {
    async getExamList(){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.get("http://localhost:8082/api/exams", {
            headers : {
                'Authorization': AuthStr 
            }
        })
    }
}

export default new ExamService();