export const CITIES = ['Amsterdam', 'Cologne', 'Brussels', 'Paris', 'Hamburg', 'Dusseldorf'];

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
