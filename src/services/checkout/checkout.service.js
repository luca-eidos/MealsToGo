import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51IknTvKoEJnCAQM1CvvyYqltWQmjeLTgOV2Gb4I7CjkmwiAiqpWPO0VwlEsDepCBTofEhI7UAB2msh0mYiBsFI9x00aucEItm2"
);

export const cardTokenRequest = (card) => stripe.createToken(card);
