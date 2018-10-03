import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class TableRow extends Component {
    constructor(props) {
      super(props);
      this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(event) {
        event.preventDefault();
        if (!confirm('Are your sure you want to delete this item?')) {
          return false
        }
        let uri = `http://ec2-52-89-44-27.us-west-2.compute.amazonaws.com:8007/api/v1/patient/${this.props.obj.id}`;
        axios.delete(uri)
          .then(response => {
            this.props.deleteRow(this.props.index);
            //this.props.history.push('/display-item');
          })
          .catch(function (error) {
            console.log(error)
          });
        
    }
    
    render() {
        return (
            <tr>
              <td>
                {this.props.obj.id}
              </td>
              <td>
                {this.props.obj.full_name}
              </td>
              <td>
                {this.props.obj.birth_date}
              </td>
              <td>
                {this.props.obj.email}
              </td>
              <td>
                {this.props.obj.phone_no}
              </td>
              <td>
                <Link className='btn btn-primary' to={'/edit-item/' + this.props.obj.id}>Edit</Link>
              </td>
              <td>
                <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
              </td>
            </tr>
        );
    }
}

export default TableRow;