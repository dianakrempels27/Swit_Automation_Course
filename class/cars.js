// Написати клас і функцію в ньому,яка буде брати на вхід масив 
//   const cars = [
//     {
//         color:'red',
//         title:'ford',
//         year:2014
//     },
//     {
//         color:'black',
//         title:'hundai',
//         year:2021
//     },
//     {
//         color:'white',
//         title:'pego',
//         year:2017
//     },
//     ...
//   
//На вихід функція має давати відсортований масив по title і відфільтрований по року - >2015 року.
//Результат
//   const sortedCars = ['hundai 2021', 'pego 2017', ...];

class AllCars {
    sortAndFiltterCars(cars) {
        const sortedCars = cars.sort((a, b) => {
          if (a.title > b.title) {
            return 1;
          }
          if (a.title < b.title) {
            return -1;
          }
          return 0;
        });
        const filtteredCars = sortedCars.filter(car => car.year > 2015);
        const result = filtteredCars.map(car => `${car.title} ${car.year}`);
        return result;
    }
}

const cars = [
    {
      color: 'red',
      title: 'ford',
      year: 2014
    },
    {
      color: 'black',
      title: 'hundai',
      year: 2021
    },
    {
      color: 'white',
      title: 'pego',
      year: 2017
    },
    {
      color: 'green',
      title: 'bmw',
      year: 2022
    },
    {
      color: 'grey',
      title: 'tesla',
      year: 2023
    },
    {
      color: 'blue',
      title: 'opel',
      year: 2012
    }
  ];

  const allCars = new AllCars();
  const sortedCars = allCars.sortAndFiltterCars(cars);
  console.log(sortedCars);