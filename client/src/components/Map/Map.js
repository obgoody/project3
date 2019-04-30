import { GoogleApiWrapper } from 'google-maps-react';
import React from "./react"
// ...

export class MapContainer extends React.Component { }

export default GoogleApiWrapper({
    apiKey: AIzaSyDoSB5s5IZ3NR2592EGVJy2j4EZ5H7ZjP4
})(MapContainer)
