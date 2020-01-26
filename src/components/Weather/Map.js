// import React,{Component} from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//
// class MapContainer extends Component {
//
//     render() {
//         return (
//             <Map google={this.props.google} zoom={10}>
//                 <Marker
//                     name={'Your position'}
//                     position={{lat: 27.72, lng: 85.32}}
//                    />
//
//                 <InfoWindow onClose={this.onInfoWindowClose}>
//
//                 </InfoWindow>
//             </Map>
//         );
//     }
// }
//
// export default GoogleApiWrapper({
//     apiKey: ("AIzaSyBWBeK9q2tDSKfobnMqYc0KqgzzfCbX-I4")
// })(MapContainer)

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {

    // static defaultProps = {
    //     center: {
    //         lat: 27.72,
    //         lng: 85.32
    //     },
    //     zoom: 10
    // };

    render() {
        console.log("MAP PROPS",this.props)

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '400px', width: '400px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key:'AIzaSyBWBeK9q2tDSKfobnMqYc0KqgzzfCbX-I4' }}
                    defaultCenter={{
                        lat: this.props.latitude || 27.72,
                        lng: this.props.longitute || 85.32
                    }}
                    defaultZoom={10}

                >
                     
                    <AnyReactComponent
                        lat={this.props.latitude || 27.72}
                        lng={ this.props.longitute || 85.32}
                        text="My Marker"
                    />
                    
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;