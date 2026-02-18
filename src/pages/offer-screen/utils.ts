import { offersList } from '../../mocks/offers-list-mocks';
import { OffersListType } from '../../types';

const MAX_NEAR_OFFERS = 3;

export const getNearOffers = (offer: OffersListType): OffersListType[] => {
  const nearOffers: OffersListType[] = [];

  for(let i = 0; i < offersList.length; i++) {
    if(offersList[i].id !== offer.id && offersList[i].city.name === offer.city.name) {
      nearOffers.push(offersList[i]);
    }
    if(nearOffers.length >= MAX_NEAR_OFFERS) {
      break;
    }
  }
  return nearOffers;
};
