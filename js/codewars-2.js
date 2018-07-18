// 1.......calculate time
function displayValue(value) {
    let minutes = value;
      const  months = Math.floor(minutes / 40320);
      minutes = minutes % 40320;
      const weeks = Math.floor(minutes / 10080);
      minutes = minutes % 10080;
      const days = Math.floor(minutes / 1440);
      minutes = minutes % 1440;
      const hours = Math.floor(minutes / 60);
      minutes = minutes % 60;
     
     if (minutes > 0 && hours === 0 && days === 0 && weeks === 0 && months === 0) {
       console.log(`${minutes} minute`);                 
     } else if (hours > 0 && days === 0 && weeks === 0 && months === 0) {
       console.log(`${hours} hours ${minutes} minutes`);
     } else if (days > 0 && weeks === 0 && months === 0) {
       console.log(`${days} day ${hours} hours ${minutes} minutes`);
     } else if (weeks > 0 && months === 0) {
       console.log(`${weeks} week ${days} day ${hours} hours ${minutes} minutes`);
     } else if (months > 0) {
       console.log(`${months} month ${weeks} week ${days} day ${hours} hours ${minutes} minutes`);
     }
}
displayValue(58978);
///////////////////////////////////////////////////////////////


// 2.........take specified(вказану) amount of max integers from array
// and multiply it
function maxProduct(numbers, size){
  return numbers.sort( (a, b) => b - a)
    .slice(0, size).reduce( (a, b) => a * b);
}
maxProduct([10, 8, 7, 9], 3); // 720
////////////////////////////////////////////////////////////////////////


// 3.....replace odd/even elements to another array
//       then calculate total of both array

// this one I can't understand?????
rowWeights = arr => arr.reduce( (a, b, i) => 
    (a[i % 2] += b, a), [0, 0]);
//....another way.....
function rowWeights(array) {
  let arr = [0, 0];
  for (let i = 0; i < array.length; i++) {
    i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];
  }
  return arr;
}
//.......another way......
function rowWeights(arr) {
  let t1 = arr.filter( (el, ind) => ind % 2 == 0)
      .reduce( (a, item) => a + item, 0);

  let t2 = arr.filter( (el, ind) => ind % 2 !=0)
      .reduce( (a, item) => a + item, 0);
  return [t1, t2]
}
///////////////////////////////////////////////////////////////////////


// 4.....max triple sum
const maxTriSum = numbers => {
  const [a, b, c, ...rest] = [...new Set([...numbers])]
    .sort( (a, b)=> b - a);
  return a + b + c
}
//....another way..........//////////
function maxTriSum(numbers) {
  return [...new Set(numbers)].sort( (a, b) => b - a)
    .slice(0, 3).reduce( (s, v) => s + v, 0);
}
//......another way........//////////
function maxTriSum(numbers) {
  let seen = {};
  let filtered = numbers.filter( (item) =>
    seen.hasOwnProperty(item) ? false : (seen[item] = true) );

  filtered.sort( (a, b) => a - b);
  return filtered[filtered.length - 1] +
         filtered[filtered.length - 2] + 
         filtered[filtered.length - 3];
}
//.....another way.........//////////
function maxTriSum(numbers) {
  const arr = [];
  const sorted = numbers.sort( (a, b) => b - a);
  while(arr.length < 3) {
    const item = sorted.shift();
    if (!arr.includes(item) ) {
      arr.push(item);
    }
  }
  return arr.reduce( (prev, curr) => prev += curr, 0);
}
///////////////////////////////////////////////////////////////////////////////////////////

// 5....my solution...//////
function GetSum(a, b) {
  if (a === b) {
      console.log(a);
  } else if (a > b) {
   let total = 0; 
   for (let i = b; i <= a; i++) {
        total = total + i;
   }
   console.log(total);
  } else {
      let total = 0; 
      for (let i = a; i <= b; i++) {
           total = total + i;
      }
      console.log(total);
  }
}
GetSum(-525, 235);

//...another way.......
const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}
//...another way.......
function GetSum( a,b ) {
  if (a == b) {
    return a;
  } else if (a < b) {
    return a + GetSum(a + 1, b); 
  } else {
    return a + GetSum(a - 1, b);
  }
}
//...another way.......
function GetSum(a, b) {
  return (Math.abs(a - b) + 1) * (a + b) / 2;
}
//...another way.......
function GetSum(a, b) {
  tmp = 0;
  if(a < b) {
    while(a <= b) tmp += a++;
  } else {
    while(a >= b) tmp += a--;
  }    
  return tmp;
}
//...another way.......
function GetSum( a,b ) {
  let result = 0;
  const bigger = a > b ? a : b;
  const smaller = a > b ? b : a;
  for (let i = smaller; i <= bigger; i++) { 
    result += i 
  }
  return result;
}
//////////////////////////////////////////////////////////////////////

// 6.......multply array excluding each integer one by one
// and push result to the new array 
//Test - (productArray([13,10,5,2,9]), [900,1170,2340,5850,1300]);

function productArray(arr) {
  const sum = arr.reduce( (x, y) => x * y);
  return arr.map(x => sum / x);
}
//...another way.......
const productArray = arr => 
  arr.map(n => arr.reduce( (a, b) => a * b) / n);
///////////////////////////////////////////////////////////////////










