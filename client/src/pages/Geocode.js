import React, {Component} from 'react';
import { GoogleComponent } from 'react-google-location' 
const API_KEY = "AIzaSyBqnZ5Cg64QJZFDtK4SN5iKxHZHV0u2nYY"



    class Geocode extends Component {
      constructor(props) {
        super(props)
        this.state = {
          place: null,
        };
      }
    
      render() {
        return (
          <div >
             <GoogleComponent
              apiKey={API_KEY}
              language={'en'}
              country={'country:ir|country:us'}
              coordinates={true}
              onChange={(e) => { this.setState({ place: e }) }} />
          </div>
    
        )
      } 
    }
    
    
    export default Geocode;