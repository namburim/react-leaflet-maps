import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import cities from 'cities.json'
import RoutingMachine from './Routing';

export default class MyMapContainer extends React.Component {
    constructor(props) {
        super(props);
        var home = {
            lat: 41.596487,
            lng: -72.877601, "country": "US",
            "name": "Southington",
        }
        this.state = {
            lat: 41.596487,
            lng: -72.877601,
            zoom: 10,
            city: home
        };
    }

    render() {
        const position = [parseFloat(this.state.city.lat), parseFloat(this.state.city.lng)];
        return [
            <Map center={position} zoom={this.state.zoom} ref='map'>
                <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} />
            </Map>,
            <CitySearch />
        ]
    }
}

const CitySearch = (props) => {

    return (
        <div className="city-search-panel">
            <center>City Finder</center>
        </div>
    );

}