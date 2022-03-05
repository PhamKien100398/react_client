import axios from 'axios';

class IntakeService {
    async getIntakeList(){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.get("http://localhost:8082/api/intakes", {
            headers : {
                'Authorization': AuthStr 
            }
        })
    }
}

export default new IntakeService();