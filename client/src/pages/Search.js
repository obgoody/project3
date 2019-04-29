import React, { Component } from 'react';
import API from "../utils/API";
import './Search.css';


class Search extends Component {
    state = {
        search: ""
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
        alert(`Searching for garage around this zip code: ${this.state.search}`);
        API.search(this.state.search)
        .then(response => {
            console.log(response.data);
            this.setState({
                search: ""
            })    
        })
    }

    render() {
        return (
            <wrapper>
                <form className="searchTool" style={{ margin: "autoMaxWidth:300px" }}>
                    <input
                        type="text"
                        placeholder="Search Zip code" name="search"
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
            </wrapper >
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