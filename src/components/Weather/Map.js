import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component {
    render() {
        return (
            <Map google={this.props.google} zoom={14}>
                <Marker
                    name={'Your position'}
                    position={{lat: 27.72, lng: 85.32}}
                   />

                <InfoWindow onClose={this.onInfoWindowClose}>

                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBWBeK9q2tDSKfobnMqYc0KqgzzfCbX-I4")
})(MapContainer)