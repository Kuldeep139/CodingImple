//Question 1: Given an array of 0's and 1's find out number of 0's

let a = [0,1,2,1,0,3,1,1,0,4,0,5,0,0];

let count = 0;
let b = a.filter(count => count ===0).length;
let c = a.filter(count => count === 1).length;
console.log("no.of zereos:",b);
console.log("no.of one's:",c);



//Question 2: Given an array find out total no. of odd and even nos.

let oddeven = [1,2,3,4,5,6,7,8,9,10,11];

let countodd = 0,counteven = 0;
for(let i=1; i<=oddeven.length;i++)
{
    if(oddeven[i] % 2 == 0)
    {
        counteven++;
    }
    else
    {
        countodd++;
    }    
}
console.log("even count:",counteven);
console.log("odd count:",countodd);


//Question 3: Given a string find out number of vowels

let str = ["kuldeep"];


let no = 0;

v = [ "a","e","i","o","u"];

let vc = string => [...string].filter(no => 'aeiou'.includes(no.toLowerCase())).length;

console.log("vowel count of 'kuldeep':",vc('kuldeep'));

