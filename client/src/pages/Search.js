import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Moment from "react-moment";
import 'moment-timezone';
import Geocode from "react-geocode";
import API from "../utils/API";
import "../Styles/css/App.css";

class Search extends Component {
    state = {
        city: "",
        sales: [],
        cityError: "",
        center: {
            lat: 32.852906,
            lng: -117.1828535
        },
        zoom: 10
    };

    componentDidMount() {
        API.search("San Diego")
            .then(response => {
                this.setState({ sales: response.data });
                this.setState({ city: "" });
                // console.log(this.state.sales);
            })
    }

    cityCoordinates = (city) => {
        Geocode.setApiKey("AIzaSyBLimj2eXL-OopKVfmWs6yLMSEXZ12M7Z0");
        // console.log(address);
        Geocode.fromAddress(city).then(response => {
            //   const { lat, lng } = response.results[0].geometry.location;
            let lat = response.results[0].geometry.location.lat;
            let lng = response.results[0].geometry.location.lng;
            //   console.log(lat,lng);
            //   console.log(`${address},  Lat: ${lat}, Long: ${lng}`);
            this.setState({
                center: {
                    lat: lat,
                    lng: lng
                }
            });
            console.log(this.state);
        },
            error => {
                console.error(error);
            }
        )
    }

    validate = () => {
        let cityError = "";
        if (!this.state.city) {
            cityError = "Please input a valid city!";
        }
        if (cityError) {
            this.setState({ cityError });
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
        this.setState({ sales: [] });
        // Checking if search field is empty or not
        const isValid = this.validate();
        if (isValid) {
            // Converting city input to proper upper case form ex: "san diego" to "San Diego"
            let city = this.state.city.toLowerCase().split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ');
            console.log(city);
            this.cityCoordinates(city)
            API.search(city)
                .then(response => {
                    this.setState({ sales: response.data });
                    this.setState({ city: "", cityError: "" });
                    // console.log(this.state.sales);
                });
        };
    };

    render() {
        const Marker = props => {
            return (
                <div>
                    <i class="fas fa-warehouse fa-lg popupbox"></i>
                    <div className="pbox" style={{zIndex: "99999"}}>
                        <p className="sale-popup" style={{ fontSize: "18px", fontWeight: 900, width: "200px"}}>{props.title}</p>
                        <p className="sale-popup" style={{ fontSize: "14px", fontWeight: 900, width: "200px" }}>Address: {props.address}, {props.city}, {props.state} {props.zip}</p>
                    </div>
                </div>
            )
        };
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 mt-3 mb-3">
                        <div style={{ height: '80vh', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyDk_a_MQ3sUXYg2Y6oI-cxtuKXuoUtbOEM" }}
                                center={this.state.center}
                                defaultZoom={this.state.zoom}>

                                {this.state.sales.map(sale => {
                                    // console.log(sale);
                                    return <Marker title={sale.title} address={sale.address} city={sale.city} state={sale.state} zip={sale.zip} lat={sale.addressLat} lng={sale.addressLong} />
                                })}
                            </GoogleMapReact>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <form className="input-group mt-3 mb-3">
                                <input type="text" className="form-control" placeholder="Search a city" name="city" onChange={this.handleInputChange} value={this.state.city} />
                                <div className="input-group-append">
                                    <button class="btn btn-secondary mr-2" type="submit" onClick={this.handleFormSubmit}>Search</button>
                                </div>
                            </form>
                        </div>
                        <div className="row">
                            {this.state.cityError ? <div style={{ color: "red", fontSize: "20px" }}>{this.state.cityError}</div> : null}
                        </div>
                        <ul className="list-group" style={{ "overflowY": "scroll", "minHeight": "400px", "maxHeight": "430px" }}>
                            {this.state.sales.map(sale => {
                                return (
                                    <li key={sale._id} className="list-group-item mb-3">
                                        <h5><strong>{sale.title}</strong></h5>
                                        <p>Description: {sale.description}</p>
                                        <p>Start: {sale.startTime}</p>
                                        <p>End: {sale.endTime}</p>
                                        <p>Address: {sale.address}, {sale.city}, {sale.state} {sale.zip}</p>
                                        <p>Posted on <Moment format="MM/DD/YYYY h:mma">{sale.createdAt}</Moment></p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}



export default Search;