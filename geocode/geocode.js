const request = require ('request');

var geocodeAddress = (address, callback) => {

  var encodedAddress = encodeURIComponent(address);

    request({
      url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        callback('Unable to connect to google servers');
      } else if (body.status === 'ZERO_RESULTS') {
        callback('Unable to find address');
      } else if (body.status === 'OK') {
        callback(undefined, {
          address: body.results[0].formatted_address,
          lat: body.results[0].geometry.location.lat,
          lng: body.results[0].geometry.location.lng
        })
      };
    });
}

module.exports.geocodeAddress = geocodeAddress;

//fb1a712a82a2133d66d27b355139f842 api key

//https://api.darksky.net/forecast/[key]/[latitude],[longitude]
