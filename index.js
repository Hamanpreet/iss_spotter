const { nextISSTimesForMyLocation} = require('./iss.js');

//to convert unix time stamp to proper date -time
const printPassTimes = function(times) {
  for (const pass of times) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


nextISSTimesForMyLocation((error, times) => {
  if (error) {
    return console.log("It didn't work", error);
  }
  //printPassTimes(times);
});

module.exports = {printPassTimes};