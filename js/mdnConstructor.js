
//ADD <script> teg in HTML
function Person(first, last, age, gender, interests) {
  this.name = {
    'first': first,
    'last' : last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {

  	if (this.interests.length === 2) {
    	return alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + 
    			// update ternary operator
    		` years old. ${(this.gender == 'male') ? 'He' : 'She'} likes ` + this.interests[0] +
    		 ' and ' + this.interests[1] + '.');
    } else {
		let rest = [];
		for (let i = 2; i < this.interests.length; i++) {
			rest.push(this.interests[i]);
		}
		console.log(rest.join(', '));

		return alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + 
							// update ternary operator
    		` years old. ${(this.gender == 'male') ? 'He' : 'She'} likes ` + this.interests[0] + 
    		' and ' + this.interests[1] + `, ${rest.join(', ')}.`);
	}   
  };
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  };
}

let person1 = new Person('Bob', 'Smith', 32, 'female', ['music', 'skiing', 'surfing',
		'music', 'skiing', 'surfing']);

console.log(person1['age'],
person1.interests[1],
person1.bio());