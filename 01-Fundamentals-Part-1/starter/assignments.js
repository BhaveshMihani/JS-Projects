var country
var continent
var population;

const isIsland = false

let language = "Hindi"

country = "India"

continent = "Asia"

population = 1800

let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(country,continent,population,isIsland,language)
console.log(population/2)
population++
console.log(population>6)
console.log(population  >33)
console.log(description)

console.log(5 + 6 + '4' + 9 - 4 - 2)

if(population > 33){
    console.log(`${country}'s population is above average`)
    }
    else
    {
    console.log(`${country} population is ${33 - population} then average`)
}

// const numNeighbours = prompt(
//     'How many neighbour countries does your country have?'
//   );
  
  // LATER : This helps us prevent bugs
   numNeighbours = Number(
    prompt('How many neighbour countries does your country have?')
  );
  
  if (numNeighbours === 1) {
    console.log('Only 1 border!');
  } else if (numNeighbours > 1) {
    console.log('More than 1 border');
  } else {
    console.log('No borders');
  }