//Matchsticks

//Input
const step=1;

//Output
console.log(matchHouses(step));

//Function which returns number of matchsticks in that step
function matchHouses(step){
return (step*6-(step-1));
}

