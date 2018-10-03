import React, {Component} from 'react';
import { Router, Route, withRouter} from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';




class ManHinhGoiStt extends Component {
    constructor(props) {
        super(props);
           var today = new Date(),
            //date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            date = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear() + ' '+'-' +' ' + today.getHours() + ':' + today.getMinutes();
            //this.state = {date: date};
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
            sttList: [],
            date: date,
            time:'',
           };
         
        
    }
    
   
    
 // componentWillReceiveProps(nextProps) {
    // nextProps.dataAsProp.map(data => {
     // if (data.sttList.length == 0)
       //this.setState({ count: this.state.count + 1 });
    //   console.log('change data');
    // });
    //}
    //shouldComponentUpdate(nextProps){
    //return this.props.obj.in_so != nextProps.obj.in_so;
    //Shallow compare also works in this particular case
    //return this.props.obj != nextProps.obj;
  //}
    componentDidMount(){
        //this.timerID = setInterval(
            //() => this.gotoHome(),
            //300000
        //);
        console.log("TimeComponent Mounted...")
        //this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
        //this.interval = setInterval(render, 1000);
        setInterval(() => {
            this.setState(() => {
                console.log('setting state');
                //return { unseen: "does not display" }
                axios({
                          method:'get',
                          url:'http://52.89.44.27:8009/api/v1/dontiep/laydsstt',
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
                    const sttList = res.data.data;
                    this.setState({ sttList });
                    //this.setState(res.data);
                    console.log(res.data);
                        
                  })
              
             .catch(function (error) {
               console.log(error);
             });
            });
        }, 3000);
         axios({
                          method:'get',
                          url:'http://52.89.44.27:8009/api/v1/dontiep/laydsstt',
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
                    const sttList = res.data.data;
                    this.setState({ sttList });
                    //this.setState(res.data);
                    console.log(res.data);
                        
                  })
              
             .catch(function (error) {
               console.log(error);
             });
    }
    
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    
    render(){
        const sttList = this.state.sttList;
        let sttListBlock = '';
        console.log('render called');
  if(sttList.length > 0) {
    sttListBlock = sttList.map( (obj,index) => {
        if(index == 0)
        {
            return(<tr className="invalid" key={obj.id}>
                    <td>{obj.in_so}</td>
                    <td>{obj.quay_so}</td>
                </tr>)
        }
        else if(obj.loai_stt == 'A')
        {
            return(<tr className="table-warning" key={obj.id}>
                        <td>{obj.in_so}</td>
                        <td>{obj.quay_so}</td>
                    </tr>)
        }
        else
        {
            return (<tr key={obj.id}>
                    <td>{obj.in_so}</td>
                    <td>{obj.quay_so}</td>
                </tr>)
        }
      
 	})
   }
   else
   {
       //return (
         //  <h1>ko co</h1>
           //)
   }
 
        
        //if(!isScan) {
            return (
                <div>
                            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container header">
        <a className="navbar-brand">
          <img src="https://uphinhnhanh.com/images/2018/09/27/LOGOBVXA.jpg"  height="100" alt=""/>
        </a>
      
       
        <div className="collapse navbar-collapse" id="navbarResponsive">
			 
				<h1 className="mt-5"></h1>      
				
			  
         
        </div>
      </div>
    </nav>
    <div className="container table-responsive-x">

      <table className="table table-striped table-condensed">
            <thead>
                <tr>
                    <th scope="col">MỜI SỐ THỨ TỰ</th>
                    <th scope="col">QUẦY</th>
                </tr>
            </thead>
            <tbody>{sttListBlock}</tbody>
        </table>

    </div> 

	<footer id="Footer" className="clearfix">
		
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
export default ManHinhGoiStt;