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

    async createCourse(data){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.post("http://appquizz-env.eba-ymije3fm.us-east-1.elasticbeanstalk.com/api/courses", data, {
            headers : {
                'Authorization': AuthStr 
            }
        })
    }

    async getCourse(id){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.get("http://appquizz-env.eba-ymije3fm.us-east-1.elasticbeanstalk.com/api/courses/"+id,{
            headers : {
                'Authorization': AuthStr 
            }
        })
    }


    

}

export default new CourseService();