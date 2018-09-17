import React, {Component} from 'react';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Welcome(props){
    const isUutien = props.isUutien;
    if(isUutien){
        return <Patient />
    }
    return <Guest />
}

function Patient(props){
    <h1>Xin chào, {props.patientname}</h1>
}

function Guest(props){
    <h1>Xin chào</h1>
}

class ShowStt extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            card_id: '',
            patientname: '',
            birthday: '',
            isScan: false,
            isUutien: false,
            isStt: false,
            getStt: ''
        }
        
    }
    
    handleChangeCard(e){
        this.setState({
            card_id: e.target.value
        })
    }
    
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.card_id);
        let url = 'http://52.89.44.27:8009/api/v1/quetthe/' + this.state.card_id;
        axios.get(url)
            .then(response => {
                this.setState(response.data.data),
                this.setState({isScan: true})
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    
    handleUutien(){
        this.setState({isUutien: true})
        this.setState({isScan: true})
        this.setState({getStt: 'A0001'})
    }
    
    handleBinhthuong(){
        this.setState({isUutien: true})
        this.setState({isScan: true})
        this.setState({getStt: 'D0001'})
    }
    
    handleTaikham(){
        if(this.state.isUutien)
            this.setState({getStt: 'A0001'})
        else
            this.setState({getStt: 'B0001'})
    }
    
    handleKhammoi(){
        if(this.state.isUutien)
            this.setState({getStt: 'A0001'})
        else
            this.setState({getStt: 'C0001'})
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
        const isUutien = this.state.isUutien;
        
        if(!isScan) {
            return (
                <div>
                    <form onSubmit={ (e) => this.handleSubmit(e) }>
                        <label>
                            Mã Thẻ BN/Mã thẻ BHYT:
                            <input type="text" className="form-control" onChange={ (e) => this.handleChangeCard(e) } />
                        </label>
                        <input type="submit" className="btn btn-primary" value="Scan thẻ" />
                    </form>
                    
                    <button className="btn btn-primary" onClick={() => this.handleUutien()}>Ưu tiên</button> &nbsp;
                    <button className="btn btn-primary" onClick={() => this.handleBinhthuong()}>Bình thường</button>
                </div>
            )
        } else {
            return (
                <div>
                    { this.state.isUutien && 
                        <h1>Xin chào</h1>
                    }
                    
                    { !this.state.isUutien && 
                        <h1>Xin chào, {this.state.patientname}</h1>
                    }
                    
                    <h2>{this.state.getStt}</h2>
            
                    { this.state.getStt.length > 0 && 
                        <button className="btn btn-primary" onClick={() => this.gotoHome()}>Quay lại</button>
                    }
                    
                    { this.state.getStt.length <= 0 && 
                        <div>
                            <button className="btn btn-primary" onClick={() => this.handleTaikham()}>Tái khám</button> &nbsp;
                            <button className="btn btn-primary" onClick={() => this.handleKhammoi()}>Khám mới</button>
                        </div>
                    }
                </div>
            )
        }
    }
}
export default ShowStt;