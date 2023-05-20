const { fetchMyIP, fetchCoordsByIP,fetchISSFlyOverTimes } = require('./iss.js');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work", error);
//     return;
//   }
//   console.log('It worked! Returned IP: ', ip);
// });

// fetchCoordsByIP("72.53.252.47", (error, coordinates) => {
//   if(error) {
//     console.log("It didn't work",error);
//     return;
//   }
//   console.log('here', coordinates);
// });

fetchISSFlyOverTimes({ latitude: '43.0232943', longitude: '-79.8892728' } , (error, times) => {
  if  (error) {
    console.log("Couldn't get flyover times");
    return;
  }
  console.log("It worked",times);
});

