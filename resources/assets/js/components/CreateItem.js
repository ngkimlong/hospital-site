// CreateItem.js

import React, {Component} from 'react';
import axios from 'axios';

class CreateItem extends Component {
    constructor(props){
      super(props);
      this.state = {
        firstName: '', 
        lastName: '',
        email: '',
        address: '',
        phoneNo: '',
        idCard: '',
        sex: '',
        birthday: '',
        height: '',
        weight: ''
      };
  
      this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
      this.handleChangeLastName = this.handleChangeLastName.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangeAddress = this.handleChangeAddress.bind(this);
      this.handleChangePhoneNo = this.handleChangePhoneNo.bind(this);
      this.handleChangeIDCard = this.handleChangeIDCard.bind(this);
      this.handleChangeSex = this.handleChangeSex.bind(this);
      this.handleChangeBirthday = this.handleChangeBirthday.bind(this);
      this.handleChangeHeight = this.handleChangeHeight.bind(this);
      this.handleChangeWeight = this.handleChangeWeight.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeFirstName(e){
      this.setState({
        firstName: e.target.value
      })
    }
    handleChangeLastName(e){
      this.setState({
        lastName: e.target.value
      })
    }
    handleChangeEmail(e){
      this.setState({
        email: e.target.value
      })
    }
    handleChangeAddress(e){
      this.setState({
        address: e.target.value
      })
    }
    handleChangePhoneNo(e){
      this.setState({
        phoneNo: e.target.value
      })
    }
    handleChangeIDCard(e){
      this.setState({
        idCard: e.target.value
      })
    }
    handleChangeSex(e){
      this.setState({
        sex: e.target.value
      })
    }
    handleChangeBirthday(e){
      this.setState({
        birthday: e.target.value
      })
    }
    handleChangeHeight(e){
      this.setState({
        height: e.target.value
      })
    }
    handleChangeWeight(e){
      this.setState({
        weight: e.target.value
      })
    }
    handleSubmit(e){
      e.preventDefault();
      const patients = {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.email,
        address: this.state.address,
        phone_no: this.state.phoneNo,
        id_card_no: this.state.idCard,
        sex: this.state.sex,
        birth_date: this.state.birthday,
        height: this.state.height,
        weight: this.state.weight,
      }
      let uri = 'http://ec2-52-89-44-27.us-west-2.compute.amazonaws.com:8007/api/v1/patient';
      axios.post(uri, patients).then((response) => {
         this.props.history.push('/display-item');
      });
    }
  
    render() {
      return (
        <div>
          <h1>Create A Patient</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <label>First Name:</label>
                  <input type="text" className="form-control" onChange={this.handleChangeFirstName} />
                </div>
              </div>
              
              <div className="col-md-3">
                <div className="form-group">
                  <label>Last Name:</label>
                  <input type="text" className="form-control" onChange={this.handleChangeLastName} />
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <label>Email:</label>
                  <input type="text" className="form-control" onChange={this.handleChangeEmail} />
                </div>
              </div>
              
              <div className="col-md-3">
                <div className="form-group">
                  <label>Address:</label>
                  <input type="text" className="form-control" onChange={this.handleChangeAddress} />
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <label>Phone no:</label>
                  <input type="text" className="form-control" onChange={this.handleChangePhoneNo} />
                </div>
              </div>
              
              <div className="col-md-3">
                <div className="form-group">
                  <label>ID card:</label>
                  <input type="text" className="form-control" onChange={this.handleChangeIDCard} />
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <label>Sex:</label>
                  <input type="text" className="form-control" onChange={this.handleChangeSex} />
                </div>
              </div>
              
              <div className="col-md-3">
                <div className="form-group">
                  <label>Birthday:</label>
                  <input type="text" className="form-control" onChange={this.handleChangeBirthday} />
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <label>Height:</label>
                  <input type="text" className="form-control" onChange={this.handleChangeHeight} />
                </div>
              </div>
              
              <div className="col-md-3">
                <div className="form-group">
                  <label>Weight:</label>
                  <input type="text" className="form-control" onChange={this.handleChangeWeight} />
                </div>
              </div>
            </div>
            
            <br />
            <div className="form-group">
              <button className="btn btn-primary">Add Patient</button>
            </div>
          </form>
        </div>
      )
    }
}
export default CreateItem;