import { useEffect, useState, MutableRefObject, useRef } from 'react';
import {Map, TileLayer} from 'leaflet';
import { CityType} from '../types';
import { TILE_LAYER_ATTRIBUTION, TILE_LAYER_URL_PATTERN } from '../const';

type UseMapProps = {
  mapRef: MutableRefObject<HTMLElement | null>;
  city: CityType;
}

function useMap({mapRef, city}: UseMapProps): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if(mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: city.location.zoom
      });

      const layer = new TileLayer(TILE_LAYER_URL_PATTERN, {attribution: TILE_LAYER_ATTRIBUTION}
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }

  }, [mapRef, city]);

  return map;
}

export default useMap;
