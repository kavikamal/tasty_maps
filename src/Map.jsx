import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'


class AnyReactComponent extends Component {
    handleMouseHover = () => this.handleMouseHover.bind(this);

    state = {
        isHovering: false,
    };

    handleMouseHover = () => {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState = (state) => {
        return {
            isHovering: !state.isHovering,
        };
    }

    render() {
        const { text } = this.props
        return (
            <div>
                <div onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} style={{ height: "40px", width: '20px', border: '3px solid black', }}>
                    {text}

                </div>
                {
                    this.state.isHovering &&
                    <div style={{ pointerEvents:"none" }}>
                        Hovering right meow! 🐱
                    </div>
                }
            </div>

        )
    }
}

class SimpleMap extends Component {


    static defaultProps = {
        center: {
            lat: 39.40,
            lng: -86.17
        },
        zoom: 11
    };

    render() {
        const example = [
            {
                lat: 39.80,
                lng: -86.17,
                text: "1"
            },
            {
                lat: 39.762,
                lng: -86.30,
                text: '2'
            },
            {
                lat: 40,
                lng: -86.30,
                text: '3'
            }
        ]

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyC55kNS0hDuzWUDH1ebSBCpEqVveKyouqk' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {example.map(example => <AnyReactComponent key={example.text} lat={example.lat} lng={example.lng} text={example.text} />)}
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;