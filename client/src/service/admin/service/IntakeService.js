import axios from 'axios';

class IntakeService {
    async getIntakeList(){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.get("http://appquizz-env.eba-ymije3fm.us-east-1.elasticbeanstalk.com/api/intakes", {
            headers : {
                'Authorization': AuthStr 
            }
        })
    }
}

export default new IntakeService();