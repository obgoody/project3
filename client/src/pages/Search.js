import React, { Component } from 'react';
import API from "../utils/API";
import "../App.css";
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
            this.setState({zip: ""});
            console.log(this.state.sales);
        })
    }

    render() {
        return (
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
                                <p>Description: {sale.description}</p>
                                <p>{sale.line1} {sale.line2}, {sale.city}, {sale.state} {sale.zip}</p>
                            </li>
                        )
                    })}
                </ul>
            </div >
        )
    }
}



export default Search;