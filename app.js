//OBJECTS
const data = {
    name: {
      firstName: 'ana',
      lastName: 'marino',
    },
    isStudent: true,
    favoriteFootballTeam: 'fc barcelona',
    hometown: {
      city: 'buenos aires',
      country: 'argentina',
    },
  };
//destructuring the data from 
// const firstName=data.name.firstName etc.

  const {name:{firstName,lastName},isStudent,FavoriteFootballTeam,hometown:{city,country}}=data;
  console.log(city,firstName,country);


//ARRAYS

const campuses =["miami","madrid","berlin"];
const [firstCampus,secondCampus,thirdCampus]=campuses; //Arrays dont have KEYS 
console.log(thirdCampus);

const [,campus2]=campuses; // ** reference
console.log(campus2);


//NESTED ARRAY
const europeanCampuses = [
    ['madrid', 'es'],
    ['barcelona', 'es'],
    ['berlin', 'de'],
    ['paris', 'fr'],
    ['amsterdam', 'nl'],
    ['lisbon', 'pt'],
  ];

  const [[city1name,city1lang],city2]=europeanCampuses;
  console.log(city1name, city1lang);

//PRACTICE THEORY! // ** see this as reference 
  const [a, b] = [1]; // a=1, b=NaN
  console.log(a * b);
//-----> NaN

const [a, b = 1] = [2]; //a=2, b=1
console.log(a * b);
//------> 2

let [a, b = 2, c, d = 1] = [3, 4]; // a=3, b=4, c=NaN, d=1
console.log(a, b, c, d);
//------> 3,4,NAN,1