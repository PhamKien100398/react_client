import axios from 'axios';

class CourseService {
    async getCourseList(){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.get("http://appquizz-env.eba-ymije3fm.us-east-1.elasticbeanstalk.com/api/course-list", {
            headers : {
                'Authorization': AuthStr 
            }
        })
    }
}

export default new CourseService();