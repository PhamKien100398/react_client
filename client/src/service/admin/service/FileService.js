import axios from 'axios';

class FileService {
    async updoadFile(formData){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.post("http://appquizz-env.eba-ymije3fm.us-east-1.elasticbeanstalk.com/api/aws/file/upload/course", formData, {
            headers : {
                'Authorization': AuthStr 
            }
        })
    }
}

export default new FileService();