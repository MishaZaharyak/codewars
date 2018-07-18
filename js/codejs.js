// function run() {
//   console.log(this.name + ' year ' + this.year + ' is running!');
// }

// function Car (name, year) {
//   this.name = name;
//   this.year = year;
//   this.run = run;
//   return this;
// }

// let porshe = Car('Panamera', 2010);

// porshe.run();
// run();
// let Lanos = Car ('Lanos', 2018);

// function makeItems() {
//   return {
//     data: {
//       item: {
//         name: 'shoes',
//         size: {
//           us: 10,
//           eu: 44,
//         }
//       }
//     },
//     status: 'alive',
//   }
// }

// function makeArrayOfItems() {
//   return {
//     data: {
//       items: [
//         {name: 'shoes',  price: 100},
//         {name: 'shirt', price: 150},
//       ]
//     },
//     status: 'live'
//   }
// }
// //....................................here we rename keys........                              
// const a = {data: {item: {name, size: {us: usSize, eu: euroSize} } }, status} = makeItems();

// console.log(name, usSize, euroSize, status, a);
// console.log('##########################')

// const b = {data: {items: [{name, price}, item2]}, status} = makeArrayOfItems();
// console.log(name, price, item2, status, b)

function sleep(amount) {
  return new Promise( (resolve, reject) => {
    if (amount <= 300) {
      return reject('Too fast')
    }
    setTimeout( () => resolve(`Sleep for ${amount}`), amount)
  })
}

sleep(1000).then( (result) => {
  console.log('one ', result)
  return sleep(700);
}).then( (result) => {
  console.log('two ', result)
  return sleep(500);
}).then( (result) => {
  console.log('three ', result)
})
