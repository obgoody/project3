import React, {Component} from 'react';
import axios from 'axios';
const API_KEY = "AIzaSyBqnZ5Cg64QJZFDtK4SN5iKxHZHV0u2nYY";



class Geocode extends Component{
  state = {
    lat: '',
    lng: ''
  }
   getLatLng(){
     axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=6256+greenwich+dr,+san+diego,+CA&key=` + API_KEY)
        .then(res => {

        });
      }
      render() {
        return(
          <div> </div>
        )
      }
    }
    
    
    export default Geocode;
  }