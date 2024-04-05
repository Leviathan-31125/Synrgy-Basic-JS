function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  cars.map((car) => {
    if (car.available) result.push(car)
  })

  const info = {
    unfiltered_cars: cars,
    filtered_cars: result
  }

  console.log(info)

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}