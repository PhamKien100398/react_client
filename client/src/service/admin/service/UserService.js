import axios from 'axios';

class UserService {
    async checkEmail(email, id){
        if(id === null){
            const token = localStorage.getItem("jwtToken");
            const AuthStr = 'Bearer ' + token;
            return await axios.get("http://localhost:8082/api/users/check-email", {
                params:{
                    value: email
                },    
                headers : {
                    'Authorization': AuthStr 
                }
            })
        }else{
            const token = localStorage.getItem("jwtToken");
            const AuthStr = 'Bearer ' + token;
            return await axios.get("http://localhost:8082/api/users/"+id+"/check-email", {
                params:{
                    value: email
                },    
                headers : {
                    'Authorization': AuthStr 
                }
            })
        }
    }

    async getUsers(){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.get("http://localhost:8082/api/users", {
            headers : {
                'Authorization': AuthStr 
            }
        })
    }

    async searchUser(value, page, size){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.get("http://localhost:8082/api/users/search", {
            params:{
                'search-keyword': value,
                'page': page,
                'size': size
            },
            headers : {
                'Authorization': AuthStr 
            }
        })
    }

    async updateUser(user, id){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.put("http://localhost:8082/api/users/"+id, user,
        {
            headers : {
                'Authorization': AuthStr 
            }
        })
    }

    async deleteUser(id, deleted){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.get("http://appquizz-env.eba-ymije3fm.us-east-1.elasticbeanstalk.com/api/users/"+id+"/deleted/"+deleted,
        {
            headers : {
                'Authorization': AuthStr 
            }
        })
    }

    async changeDeletedUser(id, deleted){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.get("http://appquizz-env.eba-ymije3fm.us-east-1.elasticbeanstalk.com/api/users/"+id+"/deleted/"+deleted,
        {
            headers : {
                'Authorization': AuthStr 
            }
        })
    }

    async checkUsername(username){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.get("http://appquizz-env.eba-ymije3fm.us-east-1.elasticbeanstalk.com/api/users/check-username", {
            params:{
                value: username
            },    
            headers : {
                'Authorization': AuthStr 
            }
        })
    }

    async createUser(user){
        const token = localStorage.getItem("jwtToken");
        const AuthStr = 'Bearer ' + token;
        return await axios.post("http://appquizz-env.eba-ymije3fm.us-east-1.elasticbeanstalk.com/api/users", user, {
            headers : {
                'Authorization': AuthStr 
            }
        })
    }
}

export default new UserService();