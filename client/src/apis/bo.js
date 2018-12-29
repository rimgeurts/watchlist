import axios from 'axios'

export default axios.create({
    baseURL: 'http://192.168.1.56:6405/biprws/raylight/v1',
    headers: 
   {    
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-SAP-LOGONTOKEN': '"DESKTOP-H5OFUNL:6400@{3&2=5686,U3&2v=DESKTOP-H5OFUNL:6400,UP&66=40,U3&68=secEnterprise:Administrator,UP&S9=12,U3&qe=100,U3&vz=RtmOCKv4c5mRQrvzf5J0P4uvvu2k53m7Df4WQ9fQ7Bcjoth6BKSFWAFXAaEdbzUa,UP}"' 
    } 
})