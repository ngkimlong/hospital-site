import React, {Component} from 'react';
import { Router, Route, withRouter} from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';




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
           };
        
        
    }
    
    handleChangeCard(e){
        this.setState({
            card_id: e.target.value
        })
    }
    
    handleSubmit(e){
        e.preventDefault();
        if(this.state.card_id.length == 15)
           {
           this.props.history.push({ //browserHistory.push should also work here
                pathname: '/scan-the',
                state: {card_id: this.state.card_id}
              });
           }
           else
           {
               
           }
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
                            stt: this.state.so_thu_tu,
                            patient_name: ""
                          }
                        })
                  })
              
             .catch(function (error) {
               console.log(error);
             });
        
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
                            stt: this.state.so_thu_tu,
                            patient_name: ""
                          }
                        })
                  })
              
             .catch(function (error) {
               console.log(error);
             });
        
             }
    
    gotoHome(){
        this.props.history.push('/home');
    }
    
    componentDidMount(){
        //this.timerID = setInterval(
            //() => this.gotoHome(),
            //300000
        //);
    }
    
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    
    render(){
        const isScan = this.state.isScan;
        
        //if(!isScan) {
            return (
                <div>
                    <form onSubmit={ (e) => this.handleSubmit(e) }>
                        <label>
                            Mã Thẻ BN/Mã thẻ BHYT:
                            <input type="text" className="form-control" onChange={ (e) => this.handleChangeCard(e) } />
                        </label>
                        <input type="submit" className="btn btn-primary" value="Scan thẻ" />
                    </form>
                    
                    <button className="btn btn-primary" onClick={() => this.handleUutien()}>Ưu tiên</button>
                    <button className="btn btn-primary" onClick={(e) => this.handleBinhthuong()}>Bình thường</button>
                </div>
            )
        //} else {
            //return (
               // <div>
                  //  <h1>Xin chào, {this.state.patientname}</h1>
            
                  //  <h2>A001</h2>
            
                  //  <div className="form-group">
                  //      <button className="btn btn-primary" onClick={() => this.gotoHome()}>Quay lại</button>
                 //   </div>
               // </div>
           // )
        //}
    }
}
export default ManHinhStt;