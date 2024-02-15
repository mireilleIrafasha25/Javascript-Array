//. Create an array named colors with three string elements: "red", "green", "blue".
let colors =['red','green','orange']
//Add "yellow" to the end of the colors array.
colors.push('pink');
console.log(colors)
//Remove the last element from the colors array.
colors.pop();
console.log(colors)
// Access the second element in the colors array.
let secondelement= colors[1];
console.log(secondelement)
//Check if "orange" is included in the colors array.
let IsOrangeinclude= colors.includes("orange")
console.log(IsOrangeinclude)
//Print each color in the colors  array using a for loop.
 for(let i=0;i<colors.length;i++)
{
console.log(colors[i])    
}
//Double the values of each number in the numbers array.
let numbers=[1,2,3,4,5,5]
let doublenumbers=numbers.map(num=>num*2)
console.log(doublenumbers);
// Filter out even numbers from the numbers array.
let oddnum=numbers.filter(num=> num%2!==0)
console.log(oddnum)
//Find the sum of all numbers in the numbers array
let sumall= numbers.reduce((acc,num)=> acc+num,0)
console.log(sumall)
//Check if all numbers in the numbers array are greater than 0.
let Isgreaterthan1= numbers.every( num => num> 0)
console.log(Isgreaterthan1)
//Find the index of the element "green" in the colors array.
let indexofgreen=colors.indexOf('green');
console.log(indexofgreen)
//Sort the numbers array in ascending order
numbers=[2,3,5,6,8,6,7,10,300,0]
let sotrasc=numbers.sort((a,b) => a-b)
console.log(sotrasc)
//Reverse the order of elements in the colors array.
let revcolor=colors.reverse();
console.log(revcolor)
//Return the first three elements in the colors array.
let first3element= sotrasc.slice(0,3)
console.log(first3element)
//Concatenate two arrays: firstArray with elements [1, 2, 3] and secondArray with elements [4, 5, 6].
let firstArray=[1,2,3]
let secondArray=[4,5,6]
let combinedArray= firstArray.concat(secondArray)
console.log(combinedArray)
// Remove duplicates from the numbers array.
let duplicate2= [...new Set(numbers)]
console.log(duplicate2)
//Convert the mixedArray to a string with elements separated by commas.
let mixedArray=[25,'Mireille',true]
let mixsep=mixedArray.join(",")
console.log(mixsep)
// Check if all elements in the mixedArray are of the same type.
let Issametype= mixedArray.every((el,_,arr)=> typeof el === typeof arr[0])
console.log(Issametype)
// Group elements in the numbers array by odd and even.
let groupenumbers=firstArray.reduce( (acc,num)=> {acc[ num %2 === 0 ?'even':'odd'].push(num);
return acc},
 {
even:[], odd:[]
});
console.log(groupenumbers)
//Find the maximum number in the numbers array.
let max=Math.max(numbers)
console.log()
//Convert the string "Hello, World!" to an array of characters.
let stringtocharacter= 'hello,world!'.split('')
console.log(stringtocharacter)
//Reverse the characters in the helloArray.
let reversechar=stringtocharacter.reverse('')
console.log(reversechar)
//Convert the reversed characters back to a string. 
let chartostring=stringtocharacter.join('')
console.log(chartostring)
//Count the occurrences of each word in the sentence.
let sentence = "I love JavaScript JavaScript is awesome!";
let wordCount = sentence.split(" ").reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
console.log(wordCount)
// Replace all occurrences of "apple" with "orange" in the fruits array.
 let fruits=['apple','orange','pome']
let replacedFruits = fruits.map(fruit => fruit === "apple" ? "orange" : fruit);
console.log(replacedFruits)
