
const yargs = require ('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
})
.help()
.alias('help','h')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log('error message');
  } else {
    console.log(results.address);
    weather.getWeather(results.lat, results.lng, (errorMessage, weatherResults) => {
      if (errorMessage){
      console.log("error");
    }else {
      console.log(`It is currently ${weatherResults.temperature}`);
    }
  });
}
});
