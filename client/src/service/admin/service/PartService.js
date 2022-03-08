import axios from 'axios';

class PartService {
    async getPartListByCourseId(courseId){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.get("http://appquizz-env.eba-ymije3fm.us-east-1.elasticbeanstalk.com/api/courses/"+courseId+"/part-list", {
            headers : {
                'Authorization': AuthStr 
            }
        })
    }
}

export default new PartService();