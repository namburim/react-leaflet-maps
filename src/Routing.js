import { MapLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';

export default class RoutingMachine extends MapLayer {
    createLeafletElement(props: Object): Object {
        const { map, from, to } = this.props
        return L.Routing.control({
            position: 'topleft',
            waypoints: [
                L.latLng(from[0], from[1]),
                L.latLng(to[0], to[1]),
            ],
        });
    }
}