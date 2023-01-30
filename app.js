// task 1

const cars = [`Ferrari`, `Merce`, `Lambo`];
for (const car of cars) {
  console.log(car);
}

// task 2

const variant = (x) => {
  if (x > 25) {
    console.log(`${x} მეტია 25 - ზე`);
  } else if (x == 25) {
    console.log(`${x} ტოლია 25 - ის`);
  } else {
    console.log(`${x} ნაკლებია 25 - ზე`);
  }
};

variant(26);
