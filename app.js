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
  console.log(city);
