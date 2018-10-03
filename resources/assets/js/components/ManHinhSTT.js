import React, {Component} from 'react';
import { Router, Route, withRouter} from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from './LOGO BVXA.jpg';

console.log(logo);

class ManHinhStt extends Component {
    constructor(props) {
        super(props);
        //this.state = {
            //id: '',
            //loai_stt:'',
            //so_thu_tu:'',
            //trang_thai:'',
            //thoi_gian_phat:'',
            //thoi_gian_goi:'',
            //thoi_gian_ket_thuc:'',
            //ma_so_kiosk:'',
            //id_phong:'',
            //id_benh_vien:'',
            //thong_tin_so_bo:'',
            ///};
            this.state = {
            so_thu_tu:'',
            patientname:'',
            focus:true,
           };
          
            this.setWrapperRef = this.setWrapperRef.bind(this);
            this.handleClickOutside = this.handleClickOutside.bind(this);
            var today = new Date(),
            //date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            date = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear() + ' '+'-' +' ' + today.getHours() + ':' + today.getMinutes();
            this.state = {date: date};
        
    }
    setWrapperRef(node) {
    this.wrapperRef = node;
  }
    handleChangeCard(e){
        if(e.target.value!=null)
        {
        this.setState({
            card_id: e.target.value
        })
        }
        //alert(e.target.value);
        if(e.target.value!=null)
        {
        this.timerID = setInterval(
            () => this.props.history.push({ //browserHistory.push should also work here
                pathname: '/scan-the',
                state: {card_id: this.state.card_id}
             }) ,
            3000
        )
        }
        
    }
    
    handleSubmit(e){
        e.preventDefault();
        
           /*this.props.history.push({ //browserHistory.push should also work here
                pathname: '/scan-the',
                state: {card_id: this.state.card_id}
              });*/
         
    }
    handleScanThe()
    {
         this.props.history.push({ //browserHistory.push should also work here
                pathname: '/scan-the',
                state: {card_id: this.state.card_id}
              });
    }
    
   
    
    gotoUT(){
        this.props.history.push('/mh-ut');
    }
     setFocus()
     {
       this.wrapperRef.focus();  
     }
    componentDidMount(){
        //this.timerID = setInterval(
            //() => this.gotoHome(),
            //300000
        //);
          //this.wrapperRef.focus(); 
          document.addEventListener('mousedown', this.handleClickOutside);
          //document.body.addEventListener('mousedown', this.setFocus);
          //this.wrapperRef.addEventListener("blur", this.setFocus, false);
        
    }
    
    componentDidUpdate(nextProps, nextState){
        //if(this.state.focus == false){
        //this.wrapperRef.focus();
        //}
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
        //clearInterval(this.interval);
        document.removeEventListener('mousedown', this.handleClickOutside);
        //document.body.removeEventListener('mousedown', this.setFocus);
        //this.wrapperRef.addEventListener("blur", this.setFocus, false);
    }
     
    handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      //alert('You clicked outside of me!');
            //this.wrapperRef.focus(); 
            
            //document.getElementById('inputCode').focus();
            //this.setState({ focus: false });
            //this.wrapperRef.focus(); 
            //alert(this.state.focus);
        }
        //this.wrapperRef.focus();
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

      <form className="form-signin" onSubmit={this.handleSubmit}>
        <h2 className="form-signin-heading title-com">Xin mời quẹt thẻ</h2>
        <label  className="sr-only"></label>
        
        <input type="text" autoFocus ref={this.setWrapperRef} onBlur={() => this.wrapperRef.focus()}  id="inputCode" className="form-control" placeholder="" onChange={ (e) => this.handleChangeCard(e) } />
        
        
      </form>

    </div> 

	<footer id="Footer" className="clearfix">
		<div className="widgets_wrapper" >
			<div className="container">
			<h1 className="footer-title"><button onClick={() => this.gotoUT()} type="button" className="btn btn-link btn-lg op">Nếu bạn không có thẻ bấm vào đây</button></h1>
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
export default ManHinhStt;