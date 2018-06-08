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
            zoom: 15,
            city: home,
            cities: []
        };
    }

    setCities = (cities) => {
        this.setState({ cities: cities })
    }

    showCity = (city) => {
        this.setState({ city: city })
    }
    render() {
        const position = [parseFloat(this.state.city.lat), parseFloat(this.state.city.lng)];

        return (
            <div>
                <Map center={position} zoom={this.state.zoom} ref='map'>
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} />
                </Map>
                <div className="city-search-panel">
                    <CitySearch cities={cities} setCities={this.setCities} />
                    <SelectedCities cities={this.state.cities} showCity={this.showCity} />
                </div>
            </div>
        )
    }
}

const SelectedCities = (props) => {

    var selections = props.cities.map((city, index) => {
        return <div className="city-name" onClick={(e) => props.showCity(city)} key={index}>{city.country} {city.name}</div>
    })

    return selections;
}

const CitySearch = (props) => {
    const { cities, setCities } = props
    const onCityInputChange = (e) => {
        if (e.currentTarget.value && e.currentTarget.value.length > 3) {
            var newCities = cities.filter(city => city.name.toLowerCase().includes(e.currentTarget.value.toLowerCase()))

            if (newCities && newCities.length > 0) {
                setCities(newCities)
            }
        }

    }

    return (

        <center >
            <label style={{ marginTop: "10px" }}>Find City</label><br />
            <input type="text" style={{ width: "200px", height: "25px" }} onChange={(e) => onCityInputChange(e)} />
        </center>
    );

}