import React, {Component} from 'react';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ShowStt extends Component {
    constructor(props) {
       super(props);
       this.handleClick = this.handleClick.bind(this);
    }
    
    gotoHome(){
        this.props.history.push('/home');
    }
    
    componentDidMount() {
        this.timerID = setInterval(
            () => this.gotoHome(),
            3000
        );
    }
    
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    
    handleClick() {
        this.props.history.push('/home');
    }
    
    render(){
        return (
            <div>
                <h1>Xin chào, Nguyễn Văn A</h1>
        
                <h2>A001</h2>
        
                <div className="form-group">
                    <button className="btn btn-primary" onClick={this.handleClick}>Quay lại</button>
                </div>
            </div>
        )
    }
}
export default ShowStt;