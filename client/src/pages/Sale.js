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
        image1: "",
        image2: "",
        image3: "",
        titleError: "",
        descriptionError: "",
        addressError: "",
        startTimeError: "",
        endTimeError: "",
        cityError: "",
        stateError: "",
        zipError: ""

    }

    validate = () => {
        let titleError = "";
        if (!this.state.title) {
            titleError = "Please input a title";
        }
        if (titleError) {
            this.setState({ titleError });
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
                    addressLong: lng.toString()
                });
                API.add(this.state)
            },
                error => {
                    console.error(error);
                }
            )
        }
    }


    showSale = () => {
        if (this.Auth.loggedIn()) {
            return (
                <div className="container">
                    <div className="jumbotron mt-3">
                        <h1 className="salehead" style={{ textAlign: "center" }}>Add your Sale!</h1>
                        <form>
                            <div className="form-group">
                                <label for="title">Name</label>
                                <input type="text" className="form-control" name="title" placeholder="Enter a title" value={this.state.title} onChange={this.handleInputChange} required />
                                {this.state.titleError ? <div style={{ color: "red", fontSize: "20px" }}>{this.state.titleError}</div> : null}
                            </div>
                            <div className="form-group">
                                <label for="description">Description</label>
                                <input type="text" className="form-control" name="description" placeholder="Enter a description" value={this.state.description} onChange={this.handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label for="startTime">Start</label>
                                <input type="text" className="form-control" name="startTime" placeholder="When will it start?" value={this.state.startTime} onChange={this.handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label for="endTime">End</label>
                                <input type="text" className="form-control" name="endTime" placeholder="When will it end?" value={this.state.endTime} onChange={this.handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label for="address">Address</label>
                                <input type="text" className="form-control" name="address" placeholder="1234 Main Street" value={this.state.address} onChange={this.handleInputChange} required />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="city">City</label>
                                    <input type="text" className="form-control" name="city" placeholder="Enter a city" value={this.state.city} onChange={this.handleInputChange} required />
                                </div>
                                <div className="form-group col-md-4">
                                    <label for="state">State</label>
                                    <input type="text" className="form-control" name="state" placeholder="Ex: CA" value={this.state.state} onChange={this.handleInputChange} required />
                                </div>
                                <div className="form-group col-md-2">
                                    <label for="zip">Zip</label>
                                    <input type="text" className="form-control" name="zip" placeholder="12345" value={this.state.zip} onChange={this.handleInputChange} required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="image1">Image 1</label>
                                <input type="text" className="form-control" name="image1" placeholder="image.jpg" value={this.state.image1} onChange={this.handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label for="image2">Image 2</label>
                                <input type="text" className="form-control" name="image2" placeholder="anotherImage.jpg" value={this.state.image2} onChange={this.handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label for="image3">Image 3</label>
                                <input type="text" className="form-control" name="image3" placeholder="yetAnotherImage.jpg" value={this.state.image3} onChange={this.handleInputChange} required />
                            </div>
                            <button to="/search" type="submit" className="btn btn-secondary" onClick={this.handleFormSubmit} data-toggle="modal" data-target="#exampleModal">Add!</button>
                            {/* Modal to confirm the sale was added and gives a summary */}
                            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
    render() {
        return (
            <div>
                {this.showSale()}
            </div>
        )
    }
}


export default Sale;