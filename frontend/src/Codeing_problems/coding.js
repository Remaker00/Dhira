1.
let n = 100;
for (let i = 1;i <= n;i++) {
    if (i % 3 == 0 && i % 5 == 0) console.log('FizzBuzz');
    else if (i % 5 == 0) console.log('Buzz');
    else if (i % 3 == 0) console.log('Fizz');
    else console.log(i);
}



2.
let input = "Hello, World!";
let vowel = ['a', 'e', 'i', 'o', 'u'];
let count = 0;
let str = "";
for (let i = 0;i < input.length;i++) {
    if (vowel.includes(input[i])) {
        count++;
    }
    str += input[i].toUpperCase();
}
console.log(count);
console.log(str);





