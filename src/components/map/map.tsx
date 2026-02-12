import { Icon, Marker, layerGroup } from 'leaflet';
import { CityType, Point, Points} from '../../types';
import useMap from '../../hooks/use-map';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';

type MapProps = {
  city: CityType;
  selectedPoint: Point | undefined;
  points: Points;
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

function Map({city, points, selectedPoint}: MapProps):JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  useEffect(() => {
    if(map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });


        marker
          .setIcon(
            selectedPoint !== undefined && point.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);

      });


      return () => {
        map.removeLayer(markerLayer);
      };

    }
  }, [map, selectedPoint, city, points]);

  return (
    <section className="cities__map map">
      <div style={{height: '500px'}} ref={mapRef}></div>
    </section>
  );
}

export default Map;
