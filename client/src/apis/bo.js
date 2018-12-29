import axios from 'axios'

export default axios.create({
    baseURL: 'http://192.168.1.56:6405/biprws/raylight/v1',
    headers: 
   {    
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-SAP-LOGONTOKEN': '"DESKTOP-H5OFUNL:6400@{3&2=5759,U3&2v=DESKTOP-H5OFUNL:6400,UP&66=40,U3&68=secEnterprise:Administrator,UP&S9=12,U3&qe=100,U3&vz=MdLz4uE_jI8fp1jxsiv2iCai78zxv4NXPmsjso4lAFVrJ9IbVwhYVt0dgkb9SVDs,UP}"' 
    } 
})