import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Moment from "react-moment";
import 'moment-timezone';

import API from "../utils/API";
import "../Styles/css/App.css";

class Search extends Component {
    state = {
        city: "",
        sales: [],
        cityError: ""
    };

    static defaultProps = {

        center: {
            lat: 32.852906,
            lng: -117.1828535
        },
        zoom: 12
    };

    // componentDidMount() {
    //     API.search("San Diego")
    //         .then(response => {
    //             this.setState({ sales: response.data });
    //             this.setState({ city: "" });
    //             // console.log(this.state.sales);
    //         })
    // }

    validate = () => {
        let cityError = "";
        if (!this.state.city) {
            cityError = "Please input a valid city!";
        }
        if(cityError) {
            this.setState({cityError});
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
        this.setState({sales: []});
                // Checking if search field is empty or not
        const isValid = this.validate();
        if (isValid) {
            // Converting city input to proper upper case form ex: "san diego" to "San Diego"
            let city = this.state.city.toLowerCase().split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ');
            console.log(city);
            API.search(city)
                .then(response => {
                    this.setState({ sales: response.data });
                    this.setState({ city: "", cityError: "" });
                    // console.log(this.state.sales);
                })
        }
    }

    render() {
        const Marker = sale => {
            return <div className="AwesomePin">
                <i class="fab fa-font-awesome-flag"></i>

            </div>
        }
        return (
            <div className="container-fluid">
                <div className="row">
                    {/* <MapComponent /> */}
                    <div className="col-lg-8 mt-3 mb-3">
                        <div style={{ height: '80vh', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyDk_a_MQ3sUXYg2Y6oI-cxtuKXuoUtbOEM" }}
                                defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom}>

                                {this.state.sales.map(sale => {
                                    // console.log(sale);
                                    return <Marker lat={sale.addressLat} lng={sale.addressLong} />
                                })}
                            </GoogleMapReact>
                        </div>
                    </div>

                    {/* <List /> */}
                    <div className="col-lg-4">
                        <div className="row">
                            <form class="input-group mt-3 mb-3">
                                <input type="text" class="form-control" placeholder="Search a city" name="city" onChange={this.handleInputChange} value={this.state.city} />
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="submit" onClick={this.handleFormSubmit}>Search</button>
                                </div>
                            </form>
                        </div>
                        <div className="row">
                            {this.state.cityError ? <div style={{color: "red"}}>{this.state.cityError}</div> : null}
                        </div>
                        <ul className="list-group" style={{ "overflow-y": "scroll", "minHeight": "100px", "maxHeight": "690px" }}>
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