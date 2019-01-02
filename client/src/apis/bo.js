import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:6405/biprws',
    headers: 
   {    
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        
    } 
})