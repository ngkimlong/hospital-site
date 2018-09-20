import React, {Component} from 'react';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

class WelcomeForm extends Component {
    constructor(props) {
       super(props);
       this.state= {
            patientname: '',
            loaibenhanid:'',
            patientid:'',
            hosobenhanid:'',
            age:'',
            }
    }
    
    gotoHome(){
        this.props.history.push('/home');
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
                          url:'http://52.89.44.27:8009/api/v1/dontiep/quetthe/'+ this.props.location.state.card_id,
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
                    //const userList = res.data.data;
                    //this.setState({ userList });
                    this.setState(res.data.data);
                  })
              
             .catch(function (error) {
               console.log(error);
             });
     }
     handleTaikham(){
         
     }
    handleKhammoi(){
        //if(this.state.isUutien)
            //this.setState({getStt: 'A0001'})
        //else
            //this.setState({getStt: 'C0001'})
            axios({
                          method:'get',
                          url:'http://52.89.44.27:8009/api/v1/dontiep/laysttkm/' + this.state.age,
                          //responseType:'application/json',
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
                    //const userList = res.data.data;
                    //this.setState({ userList });
                    this.setState(res.data);
                    //console.log(res.data);
                        this.props.history.push({
                          pathname: '/lay-stt',
                          state: {
                            stt: this.state.so_thu_tu,
                            patient_name: this.state.patientname,
                            patient_id: this.state.patientid,
                          }
                        })
                  })
              
             .catch(function (error) {
               console.log(error);
             });
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    renderElement(){
           if(this.state.patientname != '')
              return <h1>Xin chào,{this.state.patientname}</h1>;
           return null;
        }
    _renderButton () {
    if (this.state.loaibenhanid == 24) {
        return <button className="btn btn-primary" onClick={() => this.handleTaikham()}>Tái Khám</button>
    }
         return null
        }    
    render(){
        //const usersList = this.state.userList;
        //let usersListBlock = '';
        //if(usersList.length > 0) {
                
                return (
                    <div>
                            
                  { this.renderElement() }
                    <div className="form-group">
                            <input type="hidden" value={this.state.patientid} />
                            {this._renderButton ()}
                            <button className="btn btn-primary" onClick={() => this.handleKhammoi()}>Khám mới</button>
                        </div>
                    </div>
                )
            
       // }
       // else
       // {
          //   return (
          // <h1>ko co</h1>
          // )
        //}
    }
}
export default WelcomeForm;