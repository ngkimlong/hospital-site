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
            hosobenhanstatus:'',
            age:'',
            birthday:'',
            birthday_year:'',
            gioitinhname:'',
            hc_dantocname:'',
            hc_quocgianame:'',
            hc_xaname:'',
            hc_huyenname:'',
            hc_tinhname:'',
            bhytcode:'',
            hc_sonha:'',
            hc_thon:'',
            gioitinhcode:'',
            departmentname:'',
            dangkytruoc:'',
            so_thu_tu:'',
            }
             var today = new Date(),
            
            date = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear() + ' '+'-' +' ' + today.getHours() + ':' + today.getMinutes();
        this.state = {
            date: date
        };
        
    }
    
    gotoHome(){
        this.props.history.push('/man-hinh-stt');
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
                          //url:'http://52.89.44.27:8009/api/v1/dontiep/quetthe/000000541785',
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
                    //console.log(res.data);
                    this.setState(res.data);
                    console.log(res.data);
                    if(this.state.dangkytruoc == 1){
                                    axios({
                                  method:'get',
                                  url:'http://52.89.44.27:8009/api/v1/dontiep/laysttdkt',
                                  //url:'http://52.89.44.27:8009/api/v1/dontiep/quetthe/000000541785',
                                  responseType:'application/json',
                                  //mode: 'no-cors',
                                  headers: {
                                    'Access-Control-Allow-Origin': '*',
                                    'Content-Type': 'application/json',
                                    'Accept': 'application/json',
                                  },
                                  //withCredentials: true,
                                  //credentials: 'same-origin',
                                  
                                }).then(respon => {
                                    
                                    //this.setState({
                                       //so_thu_tu: respon.data
                                     //});
                                    this.setState(respon.data);
                                    console.log(respon.data);
                                    
                                })
                    }
                    
                  })
              
             .catch(function (error) {
               console.log(error);
             });
     }
     handleTaikham(){
         axios({
                          method:'get',
                          url:'http://52.89.44.27:8009/api/v1/dontiep/laystttk',
                          //responseType:'application/json',
                          //mode: 'no-cors',
                          params:[{'hoten':this.state.patientname,
                                'ngaythangnamsinh':this.state.birthday,
                                'namsinh':this.state.birthday_year,
                                'tuoi':'76',
                                'gioitinh':this.state.gioitinhname,
                                'dantoc':this.state.hc_dantocname,
                                'quoctich':this.state.hc_quocgianame,
                                'diachi':this.state.hc_sonha + ' ' + this.state.hc_thon + ' ' + this.state.hc_huyenname + ' ' + this.state.hc_xaname,
                                'sothebhyt':this.state.bhytcode,
                                'noiKCBbandau':'Cu chi',
                              }],
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
                            patient_name: this.state.patientname,
                            patient_id: this.state.patientid,
                          }
                        })
                  })
              
             .catch(function (error) {
               console.log(error);
             });
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
                          params:{'hoten':this.state.patientname,
                                'ngaythangnamsinh':this.state.birthday,
                                'namsinh':this.state.birthday_year,
                                'tuoi':'76',
                                'gioitinh':this.state.gioitinhname,
                                'dantoc':this.state.hc_dantocname,
                                'quoctich':this.state.hc_quocgianame,
                                'diachi':this.state.hc_sonha + ' ' + this.state.hc_thon + ' ' + this.state.hc_huyenname + ' ' + this.state.hc_xaname,
                                'sothebhyt':this.state.bhytcode,
                                'noiKCBbandau':'Cu chi',
                              },
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
           {
              //return <h1>Xin chào,{this.state.patientname}</h1>;
              return <h1 className="form-signin-heading title-com">Xin chào {this.state.gioitinhcode == 1 ? 'Anh' : 'Chị'} {this.state.patientname}</h1>
           }
           //else if(this.state.patientname != '')
           //{
             //  return <h1 className="form-signin-heading title-com">Xin chào Chị {this.state.patientname}</h1>
           //}
           else
           {
           return null;
           }
        }
    renderID(){
        if(this.state.patientid != '')
        return <input type="hidden" name="action" value="{this.state.patientid}" />
        return null;
    } 
    renderMessage()
    {
        
        if(this.state.dangkytruoc == 1)
        {
            return (
                <div>
                <h1 className="footer-title-Wellcome">{this.state.gioitinhcode == 1 ? 'Anh' : 'Chị'} đã đăng ký trước phòng {this.state.departmentname}</h1>
                <h1 className="footer-title-Wellcome">Số thứ tự của {this.state.gioitinhcode == 1 ? 'Anh' : 'Chị'} là:</h1>
                </div>
                ) 
        }
        else 
        {
          return <h1 className="footer-title-Wellcome">{this.state.gioitinhcode == 1 ? 'Anh' : 'Chị'} muốn <button  type="button" className="btn btn-link btn-lg op">Khám tiếp </button> phòng {this.state.departmentname} hoặc <button onClick={() => this.handleKhammoi()} type="button" className="btn btn-link btn-lg op">Khám mới</button></h1>
        }
       
    }
    renderTK()
    {
        if(this.state.hosobenhanstatus == 0)
        {
            <h1 className="footer-title-Wellcome">{this.state.gioitinhcode == 1 ? 'Anh' : 'Chị'} muốn <button  type="button" className="btn btn-link btn-lg op">Khám tiếp</button> phòng {this.state.departmentname} hoặc  <button onClick={() => this.handleKhammoi()} type="button" className="btn btn-link btn-lg op">Khám mới</button></h1>
        }
        else if(this.state.hosobenhanstatus == 1)
        {
            <h1 className="footer-title-Wellcome">{this.state.gioitinhcode == 1 ? 'Anh' : 'Chị'} muốn <button onClick={() => this.handleKhammoi()} type="button" className="btn btn-link btn-lg op">Khám mới</button></h1>
        }
    }
    renderSTT(){
        if(this.state.dangkytruoc == 1)
        {
            return(
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
                                    <form className="form-signin">
                                        <h1 className="form-signin-heading title-com">Xin chào {this.state.gioitinhcode == 1 ? 'Anh' : 'Chị'} {this.state.patientname}</h1>
                                    </form>
                            </div> 
                            <footer id="Footer" className="clearfix">
                            		<div className="widgets_wrapper" >
                            			<div className="container">
                            			<h1 className="footer-title-Wellcome">{this.state.gioitinhcode == 1 ? 'Anh' : 'Chị'} đã đăng ký trước phòng {this.state.departmentname}</h1>
                                        <h1 className="footer-title-Wellcome">Số thứ tự của {this.state.gioitinhcode == 1 ? 'Anh' : 'Chị'} là:</h1>
                            			</div>
                            		</div>
                        		    <div className="STTDK">
                            		    <div className="container">
                            			    <div id="AlertDivDK"><h1 className="STT-text">{this.state.so_thu_tu}</h1></div>
                            			</div>
                            		</div>
                            		<div className="TBDK">
                            		    <div className="container">
                            		        <div id="AlertDivDK1"><h1 className="alert-text">Xin vui lòng chờ gọi</h1></div>
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
        else
        {
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
                                    <form className="form-signin">
                                        <h1 className="form-signin-heading title-com">Xin chào {this.state.gioitinhcode == 1 ? 'Anh' : 'Chị'} {this.state.patientname}</h1>
                                    </form>
                            </div> 
                            <footer id="Footer" className="clearfix">
                            		<div className="widgets_wrapper" >
                            			<div className="container">
                            			{this.state.hosobenhanstatus == 0 && <h1 className="footer-title-Wellcome">{this.state.gioitinhcode == 1 ? 'Anh' : 'Chị'} muốn <button  type="button" className="btn btn-link btn-lg op">Khám tiếp</button> phòng {this.state.departmentname} hoặc  <button onClick={() => this.handleKhammoi()} type="button" className="btn btn-link btn-lg op">Khám mới</button></h1> }
                            			{this.state.hosobenhanstatus == 1 && <h1 className="footer-title-Wellcome">{this.state.gioitinhcode == 1 ? 'Anh' : 'Chị'} muốn <button onClick={() => this.handleKhammoi()} type="button" className="btn btn-link btn-lg op">Khám mới</button></h1>}
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
    _renderButton () {
    if (this.state.loaibenhanid == 24) {
        return <button className="btn btn-primary" onClick={() => this.handleTaikham()}>Tái Khám</button>
    }
         return null
        }    
    render(){
            return (
                    <div>
                    {this.renderSTT()}
                    </div>
                )
                
    }
}
export default WelcomeForm;