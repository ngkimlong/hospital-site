import React, {Component} from 'react';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';



class ManHinhStt extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            card_id: '',
            patientname: '',
            birthday: '',
            isScan: false,
            isUutien: false
        }
        
    }
    
    handleChangeCard(e){
        this.setState({
            card_id: e.target.value
        })
    }
    
    handleSubmit(e){
        e.preventDefault();
        //console.log(this.state.card_id);
        //let url = 'http://52.89.44.27:8009/api/v1/quetthe/' + this.state.card_id;
        //axios.get(url)
           // .then(response => {
            //    this.setState(response.data.data),
            //    this.setState({isScan: true})
           // })
            //.catch(function (error) {
             //   console.log(error)
           // })
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
        this.setState({isUutien: true})
        
    }
    
    
    
    gotoHome(){
        this.props.history.push('/home');
    }
    
    componentDidMount(){
        this.timerID = setInterval(
            () => this.gotoHome(),
            300000
        );
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
                    <button className="btn btn-primary" onClick={() => this.handleBinhthuong()}>Bình thường</button>
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