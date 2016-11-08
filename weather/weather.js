const request = require ('request');
 
var getWeather = (lat, lng, callback) => {

request({
    url: `https://api.darksky.net/forecast/fb1a712a82a2133d66d27b355139f842/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error){
      callback('error');
    } else if (response.statusCode === 400){
      callback ('unable to fetch weather');
    }else if (response.statusCode === 200){
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports.getWeather = getWeather;
