import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import './assets/css/home.css'
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Home extends Component {

  static defaultProps = {
    center: {
      lat: 32.852906,
      lng: -117.1828535
    },
    zoom: 12
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
              
              {/* <Marker lat={this.props.center.lat} lng={-117.15} />
              <Marker lat={this.props.center.lat} lng={-117.16} />
              <Marker lat={this.props.center.lat} lng={-117.17} />
              <Marker lat={this.props.center.lat} lng={-117.18} /> */}




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

export default Home;