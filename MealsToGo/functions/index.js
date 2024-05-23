// const functions = require("firebase-functions");
// const { onRequest } = require("firebase-functions/v2/https");
// const { geocodeRequest } = require("./geocode");
// const { placesRequest } = require("./places");
// const { payRequest } = require("./pay");

// const { Client } = require("@googlemaps/google-maps-services-js");
// // const stripeClient = require("stripe")(functions.config().stripe.key); // Коментиран ред
// const googleClient = new Client({});

// // Ако няма конфигурация за Stripe, инициализирай stripeClient с празен обект или със стойност по подразбиране
// const stripeClient = process.env.STRIPE_KEY
//   ? require("stripe")(process.env.STRIPE_KEY)
//   : { charges: { create: () => Promise.resolve({}) } };

// exports.geocode = onRequest((request, response) => {
//   geocodeRequest(request, response, googleClient);
// });

// exports.placesNearby = onRequest((request, response) => {
//   placesRequest(request, response, googleClient);
// });

// exports.pay = onRequest((request, response) => {
//   payRequest(request, response, stripeClient);
// });

const functions = require("firebase-functions");
const { onRequest } = require("firebase-functions/v2/https");
const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");
const { payRequest } = require("./pay");

const { Client } = require("@googlemaps/google-maps-services-js");
const stripeClient = require("stripe")(functions.config().stripe.key);
const googleClient = new Client({});

exports.geocode = onRequest((request, response) => {
  geocodeRequest(request, response, googleClient);
});

exports.placesNearby = onRequest((request, response) => {
  placesRequest(request, response, googleClient);
});

exports.pay = onRequest((request, response) => {
  payRequest(request, response, stripeClient);
});
