import { Token } from '../types/types';

const AUTH_TOKEN_KEY_NAME = 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=';

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

export const saveToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

export const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};
