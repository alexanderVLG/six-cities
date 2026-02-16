export const CITIES = ['Amsterdam', 'Cologne', 'Brussels', 'Paris', 'Hamburg', 'Dusseldorf'];

export const PLACES_OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

export const Hotels = {
  hotelsNumber: 312
};

export const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer/:id',
} as const;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const CommentLentgh = {
  MIN: 50,
  MAX: 300
};

export const URL_MARKER_DEFAULT =
  '/public/img/pin.svg';

export const URL_MARKER_CURRENT =
  '/public/img/pin-active.svg';

export const TILE_LAYER_URL_PATTERN =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const TILE_LAYER_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
