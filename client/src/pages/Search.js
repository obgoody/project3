import React, { Component } from 'react';
import MapComponent from "../components/Map/MapComponent";
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";
import API from "../utils/API";
import "../Styles/css/App.css";

class Search extends Component {
    state = {
        city: "",
        sales: []
    };

    static defaultProps = {

        center: {
            lat: 32.852906,
            lng: -117.1828535
        },
        zoom: 12
    };

    handleInputChange = event => {
        // console.log(event.target);
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.city.toLowerCase());
        API.search(this.state.city)
            .then(response => {
                this.setState({ sales: response.data });
                this.setState({ city: "" });
                // console.log(this.state.sales);
            })
    }

    render() {
        const Marker = sale => {
            return <div className="AwesomePin">
                <i class="fab fa-font-awesome-flag"></i>

            </div>
        }
        return (
            <div className="page-container">
                <div>
                    <form className="searchTool" style={{ margin: "autoMaxWidth:300px" }}>
                        <input
                            type="text"
                            placeholder="Search a city" name="city"
                            onChange={this.handleInputChange}
                            value={this.state.city} />
                        <button
                            type="submit"
                            className="btn fa fa-search btn-success"
                            onClick={this.handleFormSubmit}>SEARCH</button>
                    </form>
                    <hr />

                    {/* <MapComponent /> */}
                    <div style={{ height: '80vh', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyDk_a_MQ3sUXYg2Y6oI-cxtuKXuoUtbOEM" }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}>

                            {this.state.sales.map(sale => {
                                console.log(sale);
                                return <Marker lat={sale.addressLat} lng={sale.addressLong} />
                            })}

                            {/* <AnyReactComponent
                     lat={32.852906}
                     lng={-117.15}
                    // map={'map'}
                  /> */}

                        </GoogleMapReact>

                    </div>

                    {/* <ul className="list-group">
                        {this.state.sales.map(sale => {
                            return (
                                <li key={sale._id} className="list-group-item">
                                    <h5><strong>{sale.title}</strong></h5>
                                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                        <ol class="carousel-indicators">
                                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                        </ol>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img src={sale.image1} class="d-block w-100" alt={sale._id} />
                                            </div>
                                            <div class="carousel-item">
                                                <img src={sale.image2} class="d-block w-100" alt={sale._id} />
                                            </div>
                                            <div class="carousel-item">
                                                <img src={sale.image3} class="d-block w-100" alt={sale._id} />
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                    <p>Description: {sale.description}</p>
                                    <p>Start: {sale.startTime}</p>
                                    <p>End: {sale.endTime}</p>
                                    <p>Address: {sale.address}, {sale.city}, {sale.state} {sale.zip}</p>
                                    <p>Posted on {sale.createdAt}</p>
                                </li>
                            )
                        })}
                    </ul> */}
                </div >
            </div >
        )
    }
}



export default Search;