import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react'



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
                    <iframe className="mapEmbed" title="mapEmbed" style={{ width: 800, height: 500 }} src="https://www.google.com/maps/embed/v1/place?q=UCSD&key=AIzaSyDoSB5s5IZ3NR2592EGVJy2j4EZ5H7ZjP4"></iframe>
                </div>
            </wrapper >
        )
    }
}



export default Search;