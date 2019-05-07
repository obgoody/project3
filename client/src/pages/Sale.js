import React, { Component } from 'react';
import Geocode from "react-geocode";
import API from "../utils/API";
import AuthService from './../components/AuthService';
import "../Styles/css/App.css";


class Sale extends Component {
    constructor() {
        super();
        this.Auth = new AuthService();
    }
    state = {
        title: "",
        description: "",
        address: "",
        startTime: "",
        endTime: "",
        city: "",
        state: "",
        zip: "",
        addressLat: "",
        addressLong: "",
        formError: "",

    }

    validate = () => {
        let formError = "";
        if (!this.state.title || !this.state.description || !this.state.address || !this.state.startTime || !this.state.endTime || !this.state.city || !this.state.state || !this.state.zip) {
            formError = "Please fill out all fields";
        }
        if (formError) {
            this.setState({ formError });
            return false;
        }
        return true;
        
    }

    handleInputChange = event => {
        // console.log(event.target);
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        const isValid = this.validate();
        if (isValid) {
            // Converting address to latitude and longitude coordinates
            Geocode.setApiKey("AIzaSyBLimj2eXL-OopKVfmWs6yLMSEXZ12M7Z0");
            let address = (`${this.state.address}, ${this.state.city}, ${this.state.state} ${this.state.zip}`);
            // console.log(address);
            Geocode.fromAddress(address).then(response => {
                //   const { lat, lng } = response.results[0].geometry.location;
                let lat = response.results[0].geometry.location.lat;
                let lng = response.results[0].geometry.location.lng;
                //   console.log(lat,lng);
                //   console.log(`${address},  Lat: ${lat}, Long: ${lng}`);
                this.setState({
                    addressLat: lat.toString(),
                    addressLong: lng.toString(),
                    formError: ""
                });
                API.add(this.state)
            },
                error => {
                    console.error(error);
                }
            )
        }
    }


    render() {
        if (this.Auth.loggedIn()) {
            return (
                <div className="container">
                    <div className="jumbotron">
                        <h1 className="salehead" style={{ textAlign: "center" }}>Add a Garage Sale!</h1>
                        <form>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" className="form-control" name="title" placeholder="Enter a title" value={this.state.title} onChange={this.handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <input type="text" className="form-control" name="description" placeholder="Enter a description" value={this.state.description} onChange={this.handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="startTime">Start</label>
                                <input type="text" className="form-control" name="startTime" placeholder="When will it start?" value={this.state.startTime} onChange={this.handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="endTime">End</label>
                                <input type="text" className="form-control" name="endTime" placeholder="When will it end?" value={this.state.endTime} onChange={this.handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input type="text" className="form-control" name="address" placeholder="1234 Main Street" value={this.state.address} onChange={this.handleInputChange} required />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="city">City</label>
                                    <input type="text" className="form-control" name="city" placeholder="Enter a city" value={this.state.city} onChange={this.handleInputChange} required />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="state">State</label>
                                    <input type="text" className="form-control" name="state" placeholder="Ex: CA" value={this.state.state} onChange={this.handleInputChange} required />
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="zip">Zip</label>
                                    <input type="text" className="form-control" name="zip" placeholder="12345" value={this.state.zip} onChange={this.handleInputChange} required />
                                </div>
                            </div>
                            {this.state.formError ? <div style={{ color: "red", fontSize: "20px" }}>{this.state.formError}</div> : this.handleFormSubmit}
                            <button type="submit" className="btn btn-secondary" onClick={this.handleFormSubmit} data-toggle="modal" data-target="#exampleModal">Add!</button>
                            {/* Modal to confirm the sale was added and gives a summary */}
                            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Your sale has been added!</h5>
                                        </div>
                                        <div className="modal-body">
                                            <h5>Summary</h5>
                                            <h6>Title: {this.state.title}</h6>
                                            <p>Description: {this.state.description}</p>
                                            <p>Start: {this.state.startTime}</p>
                                            <p>End: {this.state.endTime}</p>
                                            <p>Address: {this.state.address}, {this.state.city}, {this.state.state} {this.state.zip}</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div >
            )
        }
    };
}


export default Sale;