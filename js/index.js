
//ADD <script> teg in HTML
const inventors = [
 { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
 { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
 { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
 { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
 { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
 { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
 { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
 ];

 const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Ben, Tony', 'Berry, Wendell',
 'Bierce, Abrose'];

 //filter()

 const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <1600 ? -1 : 1 );
 console.table(fifteen);

// map()

 const fullName = inventors.map((firstName) =>`${firstName.first} ${firstName.last}`);
 console.log(fullName);

 //sort()

 const bthDay = inventors.sort((a, b) => a.year < b.year ? -1 : 1);

 console.table(bthDay);

 //reduce()

 const totalYear = inventors.reduce((total, inventor) => {
 	return total + (inventor.passed - inventor.year)
 }, 0);

 console.log(totalYear);

 const oldest = inventors.sort((a, b) => {
 	const lastGuy = a.passed - a.year;
 	const nextGuy = b.passed - b.year;
 	return lastGuy > nextGuy ? -1 : 1;
 });

 console.table(oldest);

 const category = document.querySelector('.mw-category');
 const links = [...category.querySelectorAll('a')];
const de = links.map(link => link.textContent)
.filter(streetName => streetName.includes('de'));

///////////////////////////////////////////////////
 // ....data Destructuring
function makeItems() {
	return {
	  data: {
		item: {
		  name: 'shoes',
		  size: {
			us: 10,
			eu: 44,
		  }
		}
	  },
	  status: 'alive',
	}
  }
  
  function makeArrayOfItems() {
	return {
	  data: {
		items: [
		  {name: 'shoes',  price: 100},
		  {name: 'shirt', price: 150},
		]
	  },
	  status: 'live'
	}
  }
  //....................................here we rename keys........                              
  const a = {data: {item: {name, size: {us: usSize, eu: euroSize} } }, status} = makeItems();
  
  console.log(name, usSize, euroSize, status, a);
  console.log('##########################')
  
  const b = {data: {items: [{name, price}, item2]}, status} = makeArrayOfItems();
  console.log(name, price, item2, status, b)
////////////////////////////////////////////////////////







