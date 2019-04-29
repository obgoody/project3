import React, { Component } from 'react';
import './Search.css';


class Search extends Component {

    render() {
        return (
            <wrapper>
                <div className="searchTool" action="/action_page.php" style={{ margin: "autoMaxWidth:300px" }}>
                    <input type="text" placeholder="Search Zip code" name="search2" />
                    <button type="submit"><i className="fa fa-search, btn-success">SEARCH</i></button>
                </div>
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