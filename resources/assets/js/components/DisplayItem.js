// DisplayItem.js

import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TableRow from './TableRow';

class DisplayItem extends Component {
         constructor() {
                 super();
                 this.state = {
                   userList: []
                 };
        }
     componentDidMount(){
      /*axios.get('http://ec2-52-89-44-27.us-west-2.compute.amazonaws.com/api/v1/patient') // JSON File Path
               .then( response => {
                 this.setState({
                 userList: response.data
               });
             })*/
             
                axios({
                          method:'get',
                          url:'http://52.89.44.27:8009/api/v1/patient',
                          responseType:'application/json',
                          //mode: 'no-cors',
                          headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                          },
                          //withCredentials: true,
                          //credentials: 'same-origin',
                          
                        })
                  .then(res => {
                    const userList = res.data.data;
                    this.setState({ userList });
                  })
              
             .catch(function (error) {
               console.log(error);
             });
     }
     /*tabRow(){
       if(this.state.patient instanceof Array){
         return this.state.patient.map(function(object, i){
             return <TableRow obj={object} key={i} />;
         })
       }
     }*/

  render() {
  const usersList = this.state.userList;
  let usersListBlock = '';
 
  if(usersList.length > 0) {
    usersListBlock = usersList.map( obj => {
      return (
        <tr>
            <td>{obj.patientid}</td>
           
        </tr>
 			)
 	})
   }
   else
   {
       //return (
         //  <h1>ko co</h1>
           //)
   }
 
   return(
 	
 	<table className="table table-hover">
            <thead>
            <tr>
                <td>ID123</td>
                
            </tr>
            </thead>
            <tbody>
              {usersListBlock}
            </tbody>
        </table>
   )
}

}
export default DisplayItem;