import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51PHWLfHTTSVORgAjtEN7Z3pQZgEL12ls5pMPJ1zBBJDB6lVN1SEnmzNQNxUQOHx6JGRc9Kcok0Ues6oj0glyk9WE00Lzi7oDNX"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("something went wrong processing your payment");
    }
    return res.json();
  });
};
