// code your solution here
// function superbowlWin(record){
//     let answer = record.find(function(game){
//         return game.result === "W"
//     });
//     if (answer){
//         return answer.year;
//     } else
//         return undefined
// };

// function superbowlWin (record){
//     let answer = record.find(function(game){
//         return game.result === "W"
//     });
//     if (answer) {
//         return answer.year 
//     }
// }


function superbowlWin(record){
    let answer = record.find(game => game.result === "W")
    if (answer) {
     return answer.year 
    }
};
















// function loopAndFind(result, finder){
//     for(let item of result){
//       if(finder(item) === true){
//         outcome = item
//         break
//       }
//     }
//     return outcome
//   }
//   function superbowlWin(win){
//     if(win.result === 'W'){
//     console.log(superbowlWin)
//     return win.year
//     }
//   }

// const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// console.log(returnFirstTwoDrivers(drivers)) 

// console.log(returnLastTwoDrivers(drivers))

// const createFareMultiplier = function (number){
//     return function (value){
//         return value * number}
// };
// const fareDoubler = createFareMultiplier(2);

// const fareTripler = createFareMultiplier(3);

// const selectDifferentDrivers = function (drivers, driversToReturn) {
//     return driversToReturn(drivers);
// };

  // };
//     const returnLastTwoDrivers = function (drivers){
//         return drivers.slice(-2 )
//     }
//     const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// console.log(returnFirstTwoDrivers(drivers)) 

// console.log(returnLastTwoDrivers(drivers))

// const createFareMultiplier = function (number){
//     return function (value){
//         return value * number}
// };
// const fareDoubler = createFareMultiplier(2);

// const fareTripler = createFareMultiplier(3);

// const selectDifferentDrivers = function (drivers, driversToReturn) {
//     return driversToReturn(drivers);
// };