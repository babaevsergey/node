const request = require("request");

const forecast = (coordinateA, coordinateB, callback ) => {
    const url = `http://api.weatherstack.com/current?access_key=d793f62940862b4a1487718c6d05d2fb&query=${coordinateA},${coordinateB}&units=m`;
    request({ url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if(response.body.error) {
            callback('Couldn\'t find location. Try another one!', undefined);
        } else {
            callback(undefined, 'It is currently ' + response.body.current.temperature + ' degress out. Feels like ' + response.body.current.feelslike + '.')
        }
    })
}

module.exports = forecast
