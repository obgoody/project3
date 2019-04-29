import React, { Component } from 'react';



class Search extends Component {

    render() {
        return (
            <wrapper>

                <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown link
  </a>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>


                <div className="searchTool" action="/action_page.php" style={{ margin: "autoMaxWidth:300px" }}>
                    <input type="text" placeholder="Search Zip code" name="search2" />
                    <button type="submit"><i className="fa fa-search, btn-success">SEARCH</i></button>
                </div>
                
                <hr />

                <div className="text-center">
                    <img src="https://www.ownerdirect.com/Images/StaticMaps/2370-san-diego.png" className="img-fluid" alt="Responsive image" />
                </div>


                <div className="footer">
                    <p>Footer</p>
                </div>


            </wrapper >




        )
    }

}

export default Search;