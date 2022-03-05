import axios from 'axios';

class CourseService {
    async getCourseList(){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.get("http://localhost:8082/api/course-list", {
            headers : {
                'Authorization': AuthStr 
            }
        })
    }
}

export default new CourseService();