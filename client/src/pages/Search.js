import React, { Component } from 'react';
import API from "../utils/API";
import './Search.css';


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
                    <iframe className="mapEmbed" tlte="mapEmbedFrame" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d13401.26116667496!2d-117.23820484999999!3d32.889831199999996!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1556567265635!5m2!1sen!2sus"></iframe>
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

// function initMap() {
//     var UCSD = { lat: 32, lng: -117 };
//     var map = new google.maps.Map(
//         document.getElementById('map'), { zoom: 4, center: UCSD }
//     )
//     var marker = new google.maps.Marker({ position: UCSD, map: map })
// }

export default Search;