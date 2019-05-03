import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import API from "../../utils/API";

class MapComponent extends Component {
    static defaultProps = {
        
        center: {
            lat: 32.852906,
            lng: -117.1828535
        },
        zoom: 12
    };

    componentDidMount() {
        API.getAllSales()
            .then(response => {
                console.log(response.data);
            })
    };

    render() {
        const Marker = props => {
            return <div className="AwesomePin">
                <i class="fab fa-font-awesome-flag"></i>

            </div>
        }
        return (

            <div >

                <div style={{ height: '80vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyDk_a_MQ3sUXYg2Y6oI-cxtuKXuoUtbOEM" }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}>
                        {/* <AnyReactComponent
                     lat={32.852906}
                     lng={-117.15}
                    // map={'map'}
                  /> */}

                    </GoogleMapReact>

                </div>
            </div>

        );
    }
}

export default MapComponent;