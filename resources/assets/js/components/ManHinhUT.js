import React, {Component} from 'react';
import { Router, Route, withRouter} from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from './LOGO BVXA.jpg';

class ManHinhUt extends Component {
    constructor(props) {
        super(props);
         var today = new Date(),
            
            date = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear() + ' '+'-' +' ' + today.getHours() + ':' + today.getMinutes();
        this.state = {
            date: date
        };
    }
     handleBinhthuong(){
        //e.preventDefault();
        /*this.props.history.push({ //browserHistory.push should also work here
        pathname: '/lay-stt',
        state: {patient_name: ""}
        });*/
        //this.setState({
           // stt: "C0001",
            //patient_name: ""
        //})
        axios({
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
                        this.props.history.push({
                          pathname: '/lay-stt',
                          state: {
                            so_thu_tu: this.state.so_thu_tu,
                            patient_name: ""
                          }
                        })
                  })
              
             .catch(function (error) {
               console.log(error);
             });
        
             }
    handleUutien(){
        //this.setState({isUutien: true})
        axios({
                          method:'get',
                          url:'http://52.89.44.27:8009/api/v1/dontiep/laysttut',
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
                            so_thu_tu: this.state.so_thu_tu,
                            patient_name: ""
                          }
                        })
                  })
              
             .catch(function (error) {
               console.log(error);
             });
        
    }         
    gotoHome(){
        this.props.history.push('/man-hinh-stt');
    }
    render(){
        //const isScan = this.state.isScan;
        return (
                        <div>
                            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container header">
        <a className="navbar-brand">
          <img src="https://uphinhnhanh.com/images/2018/09/27/LOGOBVXA.jpg"  height="100" alt=""/>
        </a>
      
       
        <div className="collapse navbar-collapse" id="navbarResponsive">
			 
				<h1 className="mt-5">QUÉT MÃ SỐ BỆNH NHÂN</h1>      
				
			  
         
        </div>
      </div>
    </nav>
    <div className="container">

      <form className="form-signin opage">
        <h2 className="form-signin-heading title-com">Xin chọn độ tuổi</h2>
        {/*<label  className="sr-only">Email address</label>*/}
        <button onClick={() => this.handleUutien()} type="button" class="btn btn-primary btn-lg btn-block age-lg">Dưới 6 tuổi</button>
        <button onClick={() => this.handleBinhthuong()}type="button" class="btn btn-primary btn-lg btn-block age-lg">Từ 7 đến 69 tuổi</button>
        <button onClick={() => this.handleUutien()}type="button" class="btn btn-primary btn-lg btn-block age-lg">Trên 70 tuổi</button>
       
        
        
      </form>

    </div> 

	<footer id="Footer" className="clearfix">
		<div className="widgets_wrapper" >
			<div className="container">
			<h1 className="footer-title"><button onClick={() => this.gotoHome()} type="button" className="btn btn-link btn-lg op">Nếu bạn có thẻ bấm vào đây</button></h1>
			</div>
		</div>
		<div className="footer_copy">
			<div className="container footer-container">
				<div className="column one-second">
					<h2 className="footer-time" id="Time-Console">{this.state.date}</h2>
				
					
				</div>
				<div className="column one-second-right marquee">
				
					<div className='marquee-text'><h2 className="footer-time">CHÀO MỪNG BẠN ĐẾN VỚI BỆNH VIỆN XUYÊN Á</h2></div>
				</div>
			</div>
		</div>
	</footer>
    
    

                        </div> 
                   )
       
   
             }
}
export default ManHinhUt;
