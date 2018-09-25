
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

//........ reverse string few methods
function reverseString(str) {
	// modern way //////////////////////
	return str.split('').reverse().join('');

	// for loop decrementing i /////////////////
	let revString = '';
	for(let i = str.length -1; i >= 0; i--) {
		revString += str[i]; 
	}
	return revString

	// or for loop incrementing i //////////////
	let revString = '';
	for(let i = 0; i <= str.length - 1; i++) {
		revString = str[i] + revString; 
	}
	return revString

	// using for of loop //////////////////////
	let revString = '';
	for(let char of str) {
		revString = char + revString; 
	}
	return revString

	// forEach() ////////////////////////////
	let revString = '';
	str.split('').forEach(char => revString = char + revString);
	return revString

	// reduce() ////////////////////
	return str.split('').reduce( (revString, char) => char + revString, '');
}
//////////////////////////////////////

// ....is palindrome
function isPalindrome(str) {
	const revString = str.split('').reverse().join('');
	return revString === str
}
////////////////////////////////

// .....reverse number
function reverseInt(int){
	const revString = int.toString().split('').reverse().join('');
	// use Math.sign to work with negative numbers
	return parseInt(revString) * Math.sign(int);
}
////////////////////////

// capitalize first latter in word
function capitalizeLatter(str) {
	const strArr = str.toLowerCase().split(' ');
	for(let i=0; i < strArr.length; i++ ) {
		strArr[i] = strArr[i].substring(0, 1).toUpperCase() +
		strArr[i].substring(1);
	}
	return strArr.join(' ');

	// map() //////////////////
	return str.toLowerCase().split(' ')
		.map( word => word[0].toUpperCase() + word.substr(1))
		.join(' ')

	// replace() ////////////
	return str.replace(/\b[a-z]/gi, char => char.toUpperCase());
}
/////////////////////////////

// the most common character in the string
function mostCommonChar(str) {
	const charMap = {};
	let maxNum = 0;
	let maxChar = '';

	str.split('').forEach(char => {
		if(charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	});

	for(let char in charMap) {
		if(charMap[char] > maxNum) {
			maxNum = charMap[char];
			maxChar = char;
		}
	}
	return `${maxChar}: ${maxNum}`
}
//////////////////////

//.....fizzBuzz
function fizzBuzz() {
	for(let i=0; i <= 100; i++) {
		if (i % 15 === 0) { // i % 3 === 0 && i % 5 === 0
			console.log('FizzBuzz')
		} else if (i % 3 === 0) {
			console.log('Fizz')
		} else if (i % 5 === 0) {
			console.log('Buzz')
		} else {
			console.log(i)
		}
	}
}
//////////////////////////////////


//......the longest word in string
function longestWord(sen) {
	// create filtered array
	const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g)
		.sort( (a,b) => b.length - a.length);

	const longestWordArr = wordArr.filter(word => word.length === wordArr[0].length)

	return longestWordArr.length > 1 ? longestWordArr : longestWordArr[0]
}
//////////////////////////

// ......chunkArray([1,2,3,,4,5,6,7], 3) === [[1,2,3], [4,5,6], [7]]
function chunkArray(arr, len) {
	const chunkedArr = [];
	let i = 0;

	while(i < arr.length) {
		chunkedArr.push(arr.slice(i, i + len));
		i += len;
	}
	return chunkedArr;

	// forEach()
	const chunkedArr = [];

	arr.forEach(el => {
		const last = chunkedArr[chunkedArr - 1];
		if(!last || last.length == len) {
			chunkArray.push([val])
		} else {
			last.push([val])
		}
	});
	return chunkedArr
}
////////////////////


//......flatten array [[1,2,3], [4,5,6], [7]] === [1,2,3,,4,5,6,7]
function flattenArray(array) {
	return array.reduce( (a,b) => a.concat(b));

	// SOLUTION 2
	return [].concat.apply([], array);

	// SOLUTION	3
	return [].concat(...array);
}
/////////////////////////////


// ......is Anagram
function isAnagram(str1, str2) {
	function formatStr(str) {
		return str.replace(/[^\w]/g, '').toLowerCase()
			.split('').sort().join('');
	}
	return formatStr(str1) === formatStr(str2)
}

// ....change letter on to next character after it
// ....and capitalize the vowels
function letterChanges(str) {
	let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
		if(char === 'z' || char === 'Z') {
			return 'a';
		} else {
			return String.fromCharCode(char.charCodeAt() + 1);
		}
	});
	newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());
	return newStr;
}
///////////////////////////////////////////





