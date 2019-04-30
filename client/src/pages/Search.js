import React, { Component } from 'react';



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
                    <img src="https://www.ownerdirect.com/Images/StaticMaps/2370-san-diego.png" className="img-fluid" alt="Responsive image" />
                </div>
                
            </wrapper >




        )
    }

}

export default Search;