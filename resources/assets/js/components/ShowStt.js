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
                    var today = new Date(),
            //date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            date = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear() + ' '+'-' +' ' + today.getHours() + ':' + today.getMinutes();
        this.state = {
            date: date
        };
    }
    
    gotoHome(){
        this.props.history.push('/man-hinh-stt');
    }
    
    componentDidMount() {
        this.timerID = setInterval(
            () => this.gotoHome(),
            3000
        );
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
    renderName(){
           /*if(this.props.location.state.patient_name != '')
           {
              return <h1>Xin chào,{this.props.location.state.patient_name}</h1>;
           }
           else
           {
           return <h1>Xin chào</h1>
           }*/
        }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    
    render(){
        //const isScan = this.state.isScan;
        return (
                
                      <div>
                            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container header">
        <a className="navbar-brand" href="#">
          <img src="https://uphinhnhanh.com/images/2018/09/27/LOGOBVXA.jpg"  height="100" alt=""/>
        </a>
      
       
        <div className="collapse navbar-collapse" id="navbarResponsive">
			 
				<h1 className="mt-5">QUÉT MÃ SỐ BỆNH NHÂN</h1>      
				
			  
         
        </div>
      </div>
    </nav>
    <div className="container">

      <form className="form-signin">
        
      </form>

    </div> 

	<footer id="Footer" className="clearfix">
		<div className="widgets_wrapper" >
			<div className="container">
			<h1 className="footer-title">Bắt đầu in</h1>
			</div>
		</div>
		<div className="STT">
		    <div className="container">
			    <div id="AlertDiv"><h1 className="STT-text">{this.props.location.state.so_thu_tu}</h1></div>
			</div>
		</div>
		<div className="TB">
		    <div className="container">
		        <div id="AlertDiv1"><h1 className="alert-text">Xin vui lòng chờ gọi</h1></div>
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
export default ShowStt;