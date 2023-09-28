class AllCars {
    sortAndFiltterCars(cars) {
        for (let i = 0; i < cars.length - 1; i++) {
            for (let j = 0; j < cars.length - 1 - i; j++) {
              if (cars[j].title > cars[j + 1].title) {
                let temp = cars[j];
                cars[j] = cars[j + 1];
                cars[j + 1] = temp;
              }
            }
          }
        const filtteredCars = cars.filter(car => car.year > 2015);
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