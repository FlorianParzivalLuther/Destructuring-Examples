JS | Destructuring Assignment and Parameter Handling

JS | Destructuring Assignment and Parameter Handling

Learning goals
After this lesson, you will be able to:

Destructure objects and arrays,
Use rest parameter and spread operator.
Object and array destructuring
Destructuring is an easy and convenient way of extracting data from arrays and objects. The shortest possible way to explain destructuring would be breaking down complex data structures into simpler ones that are easier to use.

The reason behind introducing destructuring in ES6 was that some approaches in the ES5 were too verbose.

Objects
Let’s say we have a person object.

Copy
let person = {
name: 'Ironhacker',
age: 25,
favoriteMusic: 'Metal',
};

let name = person.name;
let age = person.age;
let favoriteMusic = person.favoriteMusic;

console.log(`Hello, ${name}.`);
console.log(`You are ${age} years old.`);
console.log(`Your favorite music is ${favoriteMusic}.`);
This is ok, but didn’t we repeat the word person multiple times here? Yes, we did. And as developers, we don’t like to repeat things because we want our code to be DRY, clean and neat. So let’s do the same but using object destructuring.

Copy
let person = {
name: 'Ironhacker',
age: 25,
favoriteMusic: 'Metal',
};

let { name, age, favoriteMusic } = person;

console.log(`Hello, ${name}.`);
console.log(`You are ${age} years old.`);
console.log(`Your favorite music is ${favoriteMusic}.`);
Awesome.

What we are doing is creating variables using the same names as the properties of our object. Essentially, it comes to this:

Copy
// ES5 way:
let name = person.name;
let age = person.age;
let favoriteMusic = person.favoriteMusic;

// ES6 way (using destructuring)
let { name, age, favoriteMusic } = person;
JavaScript breaks it apart and assigns these values to the new variables.

Default values
In case you want to create a new property of an object, you can add some default value to it, or, if you don’t, its value will equal to undefined.

Copy
let { name, age, favoriteMusic, country = 'Spain' } = person;
Here, we just created a new property country and assigned to it initial value Spain. If we didn’t assign any value, its value would be undefined.

Different variable names
As you might have noticed, we names variables the same as the keys of the object we are destructuring. The person object has a key name, and we create a variable with the same name. What if we want to use some other variable names? What if we want to use fullName instead of name? That is definitely doable with destructuring. We will still use the person object as the example.

Copy
const { name: fullName, age, favoriteMusic } = person;
console.log(`Hello, ${fullName}.`); // => Hello, Ironhacker.
Following the same logic, we can rename all the object properties.

Nested objects and destructuring
We can even get to nested objects:

Copy
const person = {
name: 'Ironhacker',
age: 25,
favoriteMusic: 'Metal',
address: {
street: 'Super Cool St',
number: 123,
city: 'Miami',
},
};

let {
name,
age,
favoriteMusic,
address: { street, number, city },
} = person;

console.log(`${name} lives in ${number} ${street}, city of ${city}.`);
// ==> Ironhacker lives in 123 Super Cool St, city of Miami.
:pencil: Time to practice (1)
Copy
const data = {
name: {
firstName: 'ana',
lastName: 'marino',
},
isStudent: true,
favoriteFootballTeam: 'fc barcelona',
hometown: {
city: 'buenos aires',
country: 'argentina',
},
};
Given the previous object data, use the object destructuring to be able to print student first and last name, favorite football club, as well as the city and the country this student is coming from.

Arrays
Array destructuring is very similar.

First, we declare our variable(s) inside of array brackets and then assign them to the one we’re trying to destructure.

Copy
const campuses = ['madrid', 'barcelona', 'miami'];
How we could destructure this array?

Copy
const [firstCampus, secondCampus, thirdCampus] = campuses;

console.log(thirdCampus); // miami
Examples:

Put the first item in the array in a variable:
Copy
const [first] = campuses;
console.log(first); // <== madrid
Skip the first element, and take the second one only:
Copy
const [, second] = campuses;
console.log(second); // <== barcelona
Skip the first and the second element, and take the third one only:
Copy
const [, , campus3] = campuses;
console.log(campus3); // <== miami
Default values
ES6 uses fail soft destructuring by default meaning that if there are more variables than items in the array, it won’t throw an error, it will just be undefined. Unless, the default value is specified. Let’s keep using the campuses array, which has 3 elements.

Copy
const [campus1, campus2, campus3, campus4] = campuses;
console.log(campus4); // ==> undefined
But we can assign the value to the additional variable (campus4):

Copy
const [campus1, campus2, campus3, campus4 = 'paris'] = campuses;
console.log(campus4); // ==> paris
Nested arrays and destructuring
Let’s create a new array, which will have a nested array in it:

Copy
const europeanCampuses = [
['madrid', 'es'],
['barcelona', 'es'],
['berlin', 'de'],
['paris', 'fr'],
['amsterdam', 'nl'],
['lisbon', 'pt'],
];
To destructure it, we could do something like this:

Copy
const [[campusSpain1], [campusSpain2, country], [campus5, theCountry]] = europeanCampuses;

console.log(campusSpain1, campusSpain2, country, theCountry);
// ==> 'madrid' 'barcelona' 'es' 'de'
:pencil: Time to practice (2)
What would be expected outputs?

Copy
const [a, b] = [1];
console.log(a _ b); // <== ???
Copy
const [a, b = 1] = [2];
console.log(a _ b); // <== ???
Copy
let [a, b = 2, c, d = 1] = [3, 4];
console.log(a, b, c, d); // ==> ???
The all-mighty ... (three dots): spread operator and rest parameter
Spread operator
Spread operator allows iterables ( arrays / objects / strings ) to be expanded into single arguments/elements. In simple English, the spread operator lets us unpack elements of an array to single/individual arguments.

Let’s take a look at an example of how to use the spread operator.

a) Merging arrays

Let’s say we have these two arrays, one with reptiles, and one with mammals.

Copy
const reptiles = ['snake', 'lizard', 'alligator'];
const mammals = ['puppy', 'kitten', 'bunny'];
We want to create a new array called animals that has all of the reptiles and all of the mammals. How would we do that?

Well, without using the spread operator, we would have to do something like this:

Copy
// ES5 approach:

const animals = reptiles.concat(mammals);

console.log(animals);
// [ 'snake', 'lizard', 'alligator', 'puppy', 'kitten', 'bunny' ]
We run two different loops to push each item from each of the two arrays into animals array.

Let’s take a look at how we can use the ES6 spread operator to accomplish the same thing.

Copy
// ES6 approach using spread operator:

const animals = [...mammals, ...reptiles];

console.log(animals);
// [ 'puppy', 'kitten', 'bunny', 'snake', 'lizard', 'alligator' ]
That’s it.

So, how does it work?

In this example, we use the spread operator ... in front of the name of an array - this returns its contents, without the array itself.

b) Copying arrays When we need to copy an array, we often times use .slice().

Copy
const names = ['ana', 'milo', 'ivan'];
const names2 = names.slice();

console.log(names2); // => [ 'ana', 'milo', 'ivan' ]
However, we can use the spread operator to copy an array as well.

Copy
const names = ['ana', 'milo', 'ivan'];
const names3 = [...names];

console.log(names3); // => [ 'ana', 'milo', 'ivan' ]
Note: Please note spread only goes one level deep when copying an array. So if you’re trying to copy a multi-dimensional array, you will have to use other alternatives. We will cover this subject in later unit.

Rest parameter
Rest parameter collects all remaining elements into an array.

What does this mean and how is this useful for us?

Let’s take a look at the following example:

Copy
function myFunction(arg1, arg2) {
console.log(arg1);
console.log(arg2);
}
If we call this function like this:

Copy
myFunction('first argument', 'second argument');
We get this:

Copy
first argument
second argument
Great, we have two arguments and we see them in the console. But what if we don’t know how many arguments we are going to have? What if we call the same function with an extra argument, what happens?

Copy
myFunction('first argument', 'second argument', 'third argument');
This code will give us:

Copy
first argument
second argument
Our program will completely ignore the 3rd argument because it is not part of the definition of our function.

There’s a workaround this:

Copy
function add() {
let sum = 0;
for (let i = 0; i < arguments.length; i++) {
sum += arguments[i];
}
return sum;
}

add(); // 0
add(1); // 1
add(1, 2, 5, 8); // 16
:bulb: arguments is kind of magic word here: it represents a special array-like object that contains all arguments by their index.

If we were to console.log() arguments in the previous example in the case add(1, 2, 5, 8);, we would have seen this:

Copy
...
console.log(arguments);
...

// { 0: 1, 1: 2, 2: 5, 3: 8 }
So it looks okay, why do we need a rest parameter then? Well, let’s try to apply .reduce() instead ‘manually’ calculating the sum.

Copy
function add() {
return arguments.reduce((sum, next) => sum + next);
}

add(1, 2, 3); // TypeError: arguments.reduce is not a function
We got the error and since we explained earlier what is arguments, it is kind of obvious why - because arguments is not the array so we can’t apply any of its methods.

In order to avoid this kind of situation, we can use the rest parameters in a function definition.

We will use ... in front of the argument name and they literally mean “gather the remaining parameters into an array”. Let’s see it through example:

Copy
function add(...numbers) {
// numbers represents the arguments passed when function gets invoked
let sum = 0;
for (let oneNumber of numbers) {
sum += oneNumber;
}
return sum;
}

add(1); // 1
add(1, 2); // 3
add(1, 2, 5, 8); // 16
And using .reduce(), we will have cleaner code:

Copy
function add(...numbers) {
let sum = 0;
return numbers.reduce((sum, next) => {
return sum + next;
});
return sum;
}

add(1, 2, 5, 8); // <== 16
:star: The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

We can choose to get the first parameters as variables and gather only the rest.

Here the first two arguments go into variables and the rest go into movies array:

Copy
function showMovie(title, year, ...actors) {
console.log(`${title} is released in ${year} and in the cast are: ${actors[0]} and ${actors[1]}.`);
}

showMovie('Titanic', '1997', 'Leonardo Di Caprio', 'Kate Winslet');
Mixed destructuring
Let’s have a different types of data nested inside each others:

Copy
const customer = {
name: {
firstName: 'ivan',
lastName: 'zoro',
},
age: 32,
preferences: [
{
tech: ['cameras', 'smartwatches'],
books: ['science fiction', 'coding'],
},
],
};
To destructure such a complex object, we have to apply everything we learned so far.

Copy
const {
name: { firstName, lastName },
age,
preferences: [{ tech, books }],
} = customer;

console.log(firstName, lastName, age); // ==> 'ivan' 'zoro' 32
console.log(tech, books); // ==> [ 'cameras', 'smartwatches' ] [ 'science fiction', 'coding' ]
If you would like to use different names than the ones provided in the code snippet, you can do so:

Copy
const {
name: { firstName, lastName },
age,
preferences: [{ tech: technology, books: literature }],
} = customer;

console.log(firstName, lastName, age); // ==> 'ivan' 'zoro' 32
console.log(technology, literature); // ==> [ 'cameras', 'smartwatches' ] [ 'science fiction', 'coding' ]
Destructuring function parameters
Since we learned how to destructure objects, learning how to destructure function arguments will be pretty simple. Let’s see how we would use properties of an object passed as an argument to a function:

Copy
function getFullName(user) {
return `${user.firstName} ${user.lastName}`;
}

getFullName({ firstName: 'ana', lastName: 'martinez' }); // => ana martinez
However, sometimes, when we are not working with a very simple structured objects, we want to destructure them to avoid the repetition:

Copy
function getFullName({ firstName, lastName }) {
return `${firstName} ${lastName}`;
}

getFullName({ firstName: 'ana', lastName: 'martinez' }); // => ana martinez
Summary
In this lesson, we saw how to use arrays and objects destructuring, and the spread operator with arrays and rest parameters.

Going forward, embrace and apply as many of these features as you can. While one of them on its own might not make a huge difference, all of them together used consistently can create a cleaner, easier to read the code, while avoiding some of the pitfalls of JavaScript.
