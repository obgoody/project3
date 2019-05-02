import React, { Component } from 'react';
import API from "../utils/API";
import "../Styles/css/App.css";
// import GoogleMapReact from 'google-map-react'

class Search extends Component {
    state = {
        zip: "",
        sales: []
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
        console.log(this.state.zip);
        API.search(this.state.zip)
            .then(response => {
                this.setState({ sales: response.data });
                this.setState({ zip: "" });
                console.log(this.state.sales);
            })
    }

    render() {
        return (
            <div className="page-container">
                <div>
                    <form className="searchTool" style={{ margin: "autoMaxWidth:300px" }}>
                        <input
                            type="text"
                            placeholder="Search Zip Code" name="zip"
                            onChange={this.handleInputChange}
                            value={this.state.search} />
                        <button
                            type="submit"
                            className="btn fa fa-search btn-success"
                            onClick={this.handleFormSubmit}>SEARCH</button>
                    </form>
                    <hr />
                    <div className="text-center">
                        <iframe className="mapEmbed" title="mapEmbed" style={{ width: 800, height: 500 }} src="https://www.google.com/maps/embed/v1/place?q=UCSD&key=AIzaSyDoSB5s5IZ3NR2592EGVJy2j4EZ5H7ZjP4"></iframe>
                    </div>

                    <ul className="list-group">
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
                                    <p>{sale.address}, {sale.city}, {sale.state} {sale.zip}</p>
                                    <p>Posted on {sale.createdAt}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div >
            </div >
        )
    }
}



export default Search;