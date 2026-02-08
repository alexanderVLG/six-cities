import { Icon, Marker, layerGroup } from 'leaflet';
import { City, PlaceOfferType } from '../../types';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  placeOfferType: PlaceOfferType[];
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps):JSX.Element {
  const {city, placeOfferType} = props;
  return (
    <section className="cities__map map"></section>
  );
}

export default Map;
