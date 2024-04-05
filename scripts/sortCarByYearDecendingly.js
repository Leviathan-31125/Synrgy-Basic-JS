function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [];
  const process = [...cars]

  // Tulis code-mu disini
  process.map((car) => {
    if (result.length == 0) {
      result.push(car)
    } else {
      for (let i = 0; i < result.length; i++) {
        if (car.year > result[i].year) {
          result.splice(i, 0, car)
          break
        }

        if (i == result.length - 1) {
          result.splice(i+1, 0, car)
          break
        }
      }
    }
  })

  const info = {
    unsorted_cars: cars,
    sorted_desc_cars: result
  }

  console.log(info)

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
