  /**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
  let numMinutes = 0;
  let trucks = ['M', 'P', 'G'];
  for (let k = 0; k < 3; k++) {
      let truckType = trucks[k];
      let tempMinutes = 0;
      let truckMinutes = 0;
      for (let i = 0; i < garbage.length; i++) {
          for (let garbageType of garbage[i]) {
              if (garbageType == truckType) {
                  tempMinutes++;
                  truckMinutes = tempMinutes;
              }
          }
          if (i < travel.length) {
              tempMinutes += travel[i];
          }
      }
      numMinutes += truckMinutes;
  }
  return numMinutes;
};