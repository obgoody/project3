import React, { Component } from 'react';
import Geocode from "react-geocode";
import API from "../utils/API";

class Sale extends Component {
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
        image3: ""
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
        Geocode.setApiKey("AIzaSyBLimj2eXL-OopKVfmWs6yLMSEXZ12M7Z0");
        let address = (`${this.state.address}, ${this.state.city}, ${this.state.state} ${this.state.zip}`);
        console.log(address);
        Geocode.fromAddress(address).then(
            response => {
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
                .then(response => {
                    alert("Garage sale added!");
                })
                // console.log(this.state);
            },
            error => {
              console.error(error);
            }
          );
        // console.log(this.state);
    }

    render() {
        return (
            <div>
                <div className="page-container">
                    <h1 className="salehead" style={{ textAlign: "center" }}>ADD A SALE!</h1>
                    <div className="saleCard" style={{ width: "80rem" }}>
                        <form>
                            <div className="form-group">
                                <label for="title">Title</label>
                                <input type="text" className="form-control" name="title" placeholder="Enter a title" value={this.state.title} onChange={this.handleInputChange} required />
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
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={this.handleFormSubmit}>SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default Sale;