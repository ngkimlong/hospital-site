// EditItem.js

import React, {Component} from 'react';
import axios from 'axios';

class EditItem extends Component {
    constructor(props){
      super(props);
      this.state = {
        first_name: '', 
        last_name: '',
        email: '',
        address: '',
        phone_no: '',
        id_card_no: '',
        sex: '',
        birth_date: '',
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
    
    componentDidMount () {
        let url = 'http://ec2-52-89-44-27.us-west-2.compute.amazonaws.com:8007/api/v1/patient/' + this.props.match.params.id;
        axios.get(url)
          .then(response => {
            this.setState(response.data.data)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    
    handleChangeFirstName(e){
      this.setState({
        first_name: e.target.value
      })
    }
    handleChangeLastName(e){
      this.setState({
        last_name: e.target.value
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
        phone_no: e.target.value
      })
    }
    handleChangeIDCard(e){
      this.setState({
        id_card_no: e.target.value
      })
    }
    handleChangeSex(e){
      this.setState({
        sex: e.target.value
      })
    }
    handleChangeBirthday(e){
      this.setState({
        birth_date: e.target.value
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
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        address: this.state.address,
        phone_no: this.state.phone_no,
        id_card_no: this.state.id_card_no,
        sex: this.state.sex,
        birth_date: this.state.birth_date,
        height: this.state.height,
        weight: this.state.weight,
      }
      let uri = 'http://ec2-52-89-44-27.us-west-2.compute.amazonaws.com:8007/api/v1/patient/' + this.props.match.params.id;
      axios.post(uri, patients)
          .then((response) => {
             this.props.history.push('/display-item');
          })
          .catch(function (error) {
            console.log(error)
          });
    }
  
    render() {
      return (
        <div>
          <h1>Edit A Patient</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <label>First Name:</label>
                  <input type="text" className="form-control" value={this.state.first_name} onChange={this.handleChangeFirstName} required />
                </div>
              </div>
              
              <div className="col-md-3">
                <div className="form-group">
                  <label>Last Name:</label>
                  <input type="text" className="form-control" value={this.state.last_name} onChange={this.handleChangeLastName} required />
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <label>Email:</label>
                  <input type="text" className="form-control" value={this.state.email} onChange={this.handleChangeEmail} required />
                </div>
              </div>
              
              <div className="col-md-3">
                <div className="form-group">
                  <label>Address:</label>
                  <input type="text" className="form-control" value={this.state.address} onChange={this.handleChangeAddress} required />
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <label>Phone no:</label>
                  <input type="text" className="form-control" value={this.state.phone_no} onChange={this.handleChangePhoneNo} required />
                </div>
              </div>
              
              <div className="col-md-3">
                <div className="form-group">
                  <label>ID card:</label>
                  <input type="text" className="form-control" value={this.state.id_card_no} onChange={this.handleChangeIDCard} required />
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <label>Sex:</label>
                  <input type="text" className="form-control" value={this.state.sex} onChange={this.handleChangeSex} required />
                </div>
              </div>
              
              <div className="col-md-3">
                <div className="form-group">
                  <label>Birthday:</label>
                  <input type="text" className="form-control" value={this.state.birth_date} onChange={this.handleChangeBirthday} required />
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <label>Height:</label>
                  <input type="text" className="form-control" value={this.state.height} onChange={this.handleChangeHeight} required />
                </div>
              </div>
              
              <div className="col-md-3">
                <div className="form-group">
                  <label>Weight:</label>
                  <input type="text" className="form-control" value={this.state.weight} onChange={this.handleChangeWeight} required />
                </div>
              </div>
            </div>
            
            <br />
            <div className="form-group">
              <button className="btn btn-primary">Edit Patient</button>
            </div>
          </form>
        </div>
      )
    }
}
export default EditItem;