import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:6405/biprws/raylight/v1',
    headers: 
   {    
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-SAP-LOGONTOKEN': '"DESKTOP-H5OFUNL:6400@{3&2=5910,U3&2v=DESKTOP-H5OFUNL:6400,UP&66=40,U3&68=secEnterprise:Administrator,UP&S9=12,U3&qe=100,U3&vz=ofCss7Fet9THQGzj9_r_Tz6mzodoyjFkhfuuJTDqjdt1tY3TVQMgd2QPQdMqMIUd,UP}"' 
    } 
})