const { fetchMyIP, fetchCoordsByIP } = require('./iss.js');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work", error);
//     return;
//   }
//   console.log('It worked! Returned IP: ', ip);
// });

// fetchCoordsByIP("72.53.259.47", (error, coordinates) => {
//   if(error) {
//     console.log("It didn't work",error);
//     return;
//   }
//   console.log('here', coordinates);
// });