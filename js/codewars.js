// 1......function that return string join with some separator(divider)
function splitAndMerge (str, spl) {
    return str.split(' ').map(el => el.split('').join(spl)).join(' ')
}



// 2......compare two string according to certain criteria
function feast(beast, dish) {
	const animal = beast.toLowerCase();
	const meal = dish.toLowerCase();

	if(animal.charAt(animal.length -1) === meal.charAt(meal.length -1) &&
		animal.charAt() === meal.charAt() && animal.length >= 2 && 
		meal.length >= 2 && !(/\d/).test(animal) && !(/\d/).test(meal) &&
		!(/^-/).test(animal) && !(/^-/).test(meal) ) {
		return true;
	} else {
		return false;
	}
}
console.log(feast("great bLue heron", "gn"));
console.log(feast("brown bear", "bear clar"));


// 3.......return largest integer in array that is obtained by 
//         comparing the equations
function expressionMatter(a, b, c) {
   let ex1 = a * (b + c),
	   ex2 = a * b * c,
	   ex3 = a + b * c,
	   ex4 = (a + b) * c,
	   ex5 = a + b + c;

	   let array = [];
	   array[0] = ex1;
	   array[1] = ex2;
	   array[2] = ex3;
	   array[3] = ex4;
	   array[4] = ex5;

	   sortArr = array.sort(function(a, b) {
	   		return a - b;
	   });

	   return sortArr.pop();
}
//
//.......another way......................
 const expressionMatter = (a, b, c) => 
    Math.max(a + b + c, a * (b + c), (a + b)* c, a * b * c);


// 4..........use indexOf() to count the number of leters in the row

function countOccurrences(string, c) {
  let count = 0;
  let pos = string.indexOf(c);

  while (pos >= 0) {
    count++;
    pos = string.indexOf(c, pos + 1);
  }
  return count;
}

countOccurrences('Буває, часом сліпну від краси', 'с');  // вертає 3


// 5.........function that return string without vawels
//
function takeVawels(string) {
	return string.replace(/[aeiouAEIOU]/g, '');
}
console.log(takeVawels('asbciej fkAIydu'));


// 6.........don't output any digits with number five
//
function dontGiveMeFive(start, end) {
	let array, counter = [], 0;
	for (let i = start; i <= end; i++) {
		if(/[5+]/.test(i) === true) {
			continue;
		}
    	array.push(i);	
        counter++
    }
    return counter;
}
dontGiveMeFive(4, 27);


// 7..........return the average of the given array rounded down to its nearest integer
function getAverage(marks){
	const result = (a, b) => a + b;
	const divide = marks.reduce(result) / marks.length;
	console.log(Math.floor(divide));
}
getAverage([1,1,1,1,1,1,1,2]);


// 8.......return min value
function findSmallestInt(args) {
    let smallInt = 0;
    for(let i = 0; i < args.length; i++) {
      if (args[i] < smallInt) {
      smallInt = args[i];
      }
    }
    return smallInt;
}
findSmallestInt([54,48,8,65,9,21]);
//........another way..............
return Math.min(...args);


// 9..........inspect number
function specialNumber(number) {
	return /[^0-5]/g.test(number)? 'Spesial!!' : 'NOT!!';
}
specialNumber(1238450);

// 10..........reduce positive element
function positiveSum(arr) {
	return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);  
}
//......another way..................
return arr.filter(x => x >= 0).reduce( (a, b) => a + b, 0);


//11........prints simple numbers.......
nextPrime:
  for (let i = 2; i <= 100; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    console.log(i); // простое
  }


// 12...........summing each integers (max * min) and return total sum
function minSum(arr) {
	arr.sort( (a, b) => a - b);
	let total = 0;
	while(arr.length) total += arr.pop() * arr.shift();
	return total;
}
minSum([12,6,10,26,3,24]);
//.......another way.................
return arr.sort( (a, b) => a - b)
    .slice(0, arr.length / 2)
        .reduce( (acc, curr, index) => 
            acc += curr * arr[ arr.length - index - 1 ], 0);


// 13...........element with word
function count(number) {
	return [...Array(number)].map((v, i) => i + 1 + ' sheep...').join('');
}
count(2);


// 14.................return value in right order
function sentence(list) {
    const myObj = list.reduce( (acum, nextItem) => Object.assign(acum, nextItem));

    const ordered = [];
    Object.keys(myObj).sort((a, b) => a - b).forEach(key => ordered.push(myObj[key]));
	console.log(ordered.join(' '));
}
// //.....another way............
const sentence = list => list
  .sort( (a, b) => Number(Object.keys(a)[0]) - Number(Object.keys(b)[0]) )
     .map(a => Object.values(a)[0])
     .join` `;
// //.....another way............
  const sentence =  List => 
     List.sort( (a, b)=> Object.keys(a) - Object.keys(b) )
    .map(a => a[Object.keys(a)]).join(" ");
//////////////////////////////////////////////////////
//
sentence( [{'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, 
{'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} 
]);
Test.assertEquals(sentence(List), 'Vatsan took his dog for a spin'); 


//.............. none repeat Character
function firstNonRepeatChar(str) {
    let len, charCount, obj = str.length, {}, [];
    let char;
	
    for(let i = 0; i < len; i++) {
      char = str[i];
      if(charCount[char]) {
        charCount[char]++;
        obj.push(charCount[char]);
      }
      else
        charCount[char] = 1;
    }
	
    for (let j in charCount) {
      if (charCount[j] == 1) console.log(j);
    }
    console.log(obj);
  }  
  
firstNonRepeatChar('the quick brown fox jumps then quickly blow air');

// ................remove duplicate
function removeDuplicateChar(str) {
    let len, charCount, newStr = str.length, {}, [];
    let char;
	
    for(let i = 0; i < len; i++){
		char = str[i];
		charCount[char] = (charCount[char])? charCount[char]++ : 1;
    }

    for (let j in charCount){
      if (charCount[j] == 1) newStr.push(j);
    }
    console.log(newStr);
  }
  
removeDuplicateChar('Learn more javascript dude');


//......count selected number in array
function count(arr, el) {

    let count = 0;
    let element = arr.indexOf(el);
  
    while (element !== -1) {
      count++;
      element = arr.indexOf(el, element + 1);
    }
    return count;
  }
let arr = [1,1,2,2,3,1,4,1];
count(arr, 1)


//............ missing number
function missingNumber(arr){
    let n = arr.length + 1, 
    sum = 0,
    len = arr.length,
    expectedSum = n * (n + 1) / 2;
    
    for(let i = 0; i < len; i++) {
      sum += arr[i];
    }
    console.log(expectedSum - sum);
  }
 missingNumber([5, 2, 6, 1, 3]); // 4


 //.......count Zero
function countZero(n) {
	let count = 0;
	while(n > 0) {
		if (n < 9) {
			console.log(count);
			return;
		}	
	 count += Math.floor(n / 10);
	 n = n / 10;
	}
  }
 countZero(100);
