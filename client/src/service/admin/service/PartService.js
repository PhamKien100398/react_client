import axios from 'axios';

class PartService {
    async getPartListByCourseId(courseId){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.get("http://localhost:8082/api/courses/"+courseId+"/part-list", {
            headers : {
                'Authorization': AuthStr 
            }
        })
    }
}

export default new PartService();