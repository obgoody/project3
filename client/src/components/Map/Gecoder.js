import React from 'react';
import axios from 'axios';

const API_KEY = "AIzaSyBqnZ5Cg64QJZFDtK4SN5iKxHZHV0u2nYY";
class Geocoder extends React.Component{
    state = {
      geo :''
    }
    componentDidMount(){
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=6256+greenwich+dr,+san+diego,+CA&key=` + API_KEY)
        .then(res => {
          const geo = res.data;
          this.setState({geo})
          console.log(geo);
        });
        }
    }
export default Geocoder;