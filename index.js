import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final

(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
const filter2014 = fifaData.filter(function(item){
return item.Year === 2014
});
const homeName = filter2014.map(function(index){
return index["Home Team Name"];
});
console.log(homeName)

const awayName = filter2014.map(function(index){
 return index["Away Team Name"]
});
console.log(awayName)

const homeGoals = filter2014.reduce(function(accumlator,index){
 return  accumlator += index["Home Team Goals"]
},0);
console.log(homeGoals)

const awayGoals = filter2014.reduce(function(total, index){
 return total + index["Away Team Goals"]
},0);
console.log(awayGoals);

const winfinal = filter2014.filter(function(index){
   return index.Stage === "Final"
});

console.log(winfinal)
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
return data.filter(function(index){
    return index.Stage === "Final"
});
};
console.log(getFinals(fifaData))
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(funC) {
    let years = [];
funC(fifaData).map(function(element){
    return years.push(element.Year)
});
return years;
};

console.log(getYears(getFinals));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(func) {

let winners = [];
func(fifaData).forEach(function(index){
if (index['Home Team Goals'] > index['Away Team Goals']) {
return winners.push(index['Home Team Name'])
}
else {
    return winners.push(index['Away Team Name']
    )}
});
return winners;
}
console.log(getWinners(getFinals));



/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

// function getWinnersByYear(getWinners, getYears) {

//     const years = getYears(fifaData);
//     const winners = getWinners(fifaData)

//     const winnersByYear = years.forEach((element, index) => {console.log(`In ${element}, ${winners[index]} won the World Cup!`)});
//     return winnersByYear;

    
// };

function getWinnersByYear(cb1, cb2) {

    const winners = cb1(getFinals, fifaData);
    const years = cb2(getFinals, fifaData);

    const winnersByYear = years.forEach((element, index) => 
    console.log(`In ${element}, ${winners[index]} won the World Cup!`));

    return winnersByYear;

};

console.log(getWinnersByYear(getWinners, getYears));




/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(alldata) {
    let aveScore ={'home': 0 , 'away':0};
     aveScore.home = alldata.reduce(function(total,index){
       return (total += index['Home Team Goals'])
    },0);
    aveScore.away = alldata.reduce(function(total,index){
        return (total += index['Away Team Goals']) 
    },0);

return {
    homeAvg: aveScore.home/alldata.length,
    awayAvg: aveScore.away/alldata.length,
    
}}


console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
