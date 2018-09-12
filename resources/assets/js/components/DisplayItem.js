import React, {Component} from 'react';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';
import TableRow from './TableRow';
import EditItem from './EditItem';
import axios from 'axios';

class DisplayItem extends Component {
    constructor(props) {
       super(props);
       this.state = {items: ''};
    }
    
    componentDidMount(){
       axios.get('http://ec2-52-89-44-27.us-west-2.compute.amazonaws.com:8007/api/v1/patient')
           .then(response => {
             this.setState({ items: response.data.data });
           })
           .catch(function (error) {
             console.log(error);
           })
    }
    
    deleteRow (key) {
        var items = [...this.state.items];
        items.splice(key, 1);
        this.setState( {items} );
    }
    
    tabRow(){
        if(this.state.items instanceof Array){
            return this.state.items.map((object, i) => {
                return <TableRow obj={object} key={i} index={i} deleteRow={ this.deleteRow.bind(this) } />;
            })
        } 
    }

    render(){
        return (
          <div>
            <h1>Items</h1>
    
            <div className="row">
              <div className="col-md-10"></div>
              <div className="col-md-2">
                <Link to="/add-item">Create Item</Link>
              </div>
            </div><br />
    
            <table className="table table-hover">
                <thead>
                <tr>
                    <td>ID</td>
                    <td>Full Name</td>
                    <td>Birthday</td>
                    <td>Email</td>
                    <td>Phone no</td>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody>
                  {this.tabRow()}
                </tbody>
            </table>
        </div>
    )
  }
}
export default DisplayItem;