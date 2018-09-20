import React, {Component} from 'react';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ShowStt extends Component {
    constructor(props) {
       super(props);
       this.state = {
            so_thu_tu:'',
            patientname:'',
           };
       
    }
    
    gotoHome(){
        this.props.history.push('/man-hinh-stt');
    }
    
    componentDidMount() {
        //this.timerID = setInterval(
           // () => this.gotoHome(),
            //3000
        //);
         /*axios({
                          method:'get',
                          url:'http://52.89.44.27:8009/api/v1/dontiep/laystt',
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
                  })
              
             .catch(function (error) {
               console.log(error);
             });*/
       
    }
    
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    renderName(){
           if(this.props.location.state.patient_name != '')
              return <h1>Xin chào,{this.props.location.state.patient_name} </h1>;
           return null;
        }
    renderSTT()
    {
        //if(this.state.so_thu_tu != "")
        //{
          //  <h2>{this.state.so_thu_tu}</h2>
        //}
    }
    render(){
        return (
            <div>
                
                { this.renderName() }
                <h2>{this.props.location.state.stt}</h2>
                <input type="hidden" value={this.props.location.state.patient_id} />
                <div className="form-group">
                    <button className="btn btn-primary" onClick={() => this.gotoHome()}>Quay lại</button>
                </div>
            </div>
        )
    }
}
export default ShowStt;