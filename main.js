// 'use strict';

// // brings in the assert module for unit testing
// const assert = require('assert');
// // brings in the readline module to access the command line
// const readline = require('readline');
// // use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });




const pigLatinSentence = (words) => {
  words = words.toString();
  console.log(words)
  let sentence = words.split(' ')
  console.log(sentence)
  let pigSentence = []
  for (let i = 0; i < sentence.length; i++) {
    pigSentence.push(pigLatin(sentence[i]))
  }
  console.log(pigSentence)
  let newSentence = pigSentence.join(' ')
  return newSentence[0].toUpperCase() + newSentence.slice(1);
}


const pigLatin = (word) => {
  let trimWord = word.trim().toLowerCase();
  let firstLetters = [];
  let wordEnd = "ay"
  let newWord = [];
  for (let i = 0; i < trimWord.length; i++) {
  if (trimWord[0] == "a" || trimWord[0] == "e" || trimWord[0] == "i" || trimWord[0] == "o" || trimWord[0] == "u") {
    newWord.push(trimWord.substring(i, trimWord.length))
    newWord = newWord.concat("y", wordEnd)
    return newWord.join('')
    } else if (trimWord[i] == "a" || trimWord[i] == "e" || trimWord[i] == "i" || trimWord[i] == "o" || trimWord[i] == "u") {
      newWord.push(trimWord.substring(i, trimWord.length))
      newWord = newWord.concat(firstLetters, wordEnd)
      return newWord.join('') 
      } else {
          firstLetters.push(trimWord[i])
        }
  }
}

const translateText = () => {
  // console.log("click")
  let inputWords = document.getElementById("toTranslate").value
  let bubble = document.getElementById("wordBubble")
  console.log(typeof inputWords)
  console.log(inputWords)
  let translation = pigLatinSentence(inputWords)
  document.getElementById("pigTalk").innerHTML = translation;

  bubble.classList.toggle("animateIn");
  bubble.style.visibility = "visible"
  setTimeout(function() {
    document.getElementById("toTranslate").value = "";
    document.getElementById("pigTalk").innerHTML = "";
    bubble.classList.toggle("animateIn");
    bubble.style.visibility = "hidden"
  }, 6000)
}

let input = document.getElementById("toTranslate")
input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    translateText();
  }
});

// pigLatin('car') //=> 'arcay'
// pigLatin('create') //=> 'eatecray'
// pigLatin('pony') //=> 'onypay'
// pigLatin('egg') //=> 'eggyay'
// // the first function called in the program to get an input from the user
// // to run the function use the command: node main.js
// // to close it ctrl + C
// const getPrompt = () => {
//   rl.question('word ', (answer) => {
//     console.log( pigLatin(answer) );
//     getPrompt();
//   });
// }


// // Unit Tests
// // You use them run the command: npm test main.js
// // to close them ctrl + C
// if (typeof describe === 'function') {

//   describe('#pigLatin()', () => {
//     it('should translate a simple word', () => {
//       assert.equal(pigLatin('car'), 'arcay');
//       assert.equal(pigLatin('dog'), 'ogday');
//     });
//     it('should translate a complex word', () => {
//       assert.equal(pigLatin('create'), 'eatecray');
//       assert.equal(pigLatin('valley'), 'alleyvay');
//     });
//     it('should attach "yay" if word begins with vowel', () => {
//       assert.equal(pigLatin('egg'), 'eggyay');
//       assert.equal(pigLatin('emission'), 'emissionyay');
//     });
//     it('should lowercase and trim word before translation', () => {
//       assert.equal(pigLatin('HeLlO '), 'ellohay');
//       assert.equal(pigLatin(' RoCkEt'), 'ocketray');
//     });
//   });
// } else {

//   getPrompt();

// }






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.