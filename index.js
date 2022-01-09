const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = function () {
  
  let str = tutorials.map((sentence) => { 
  
  
    let result = sentence.split(' ').map(function(word) {    
    
    console.log(str)
    
    let str2 = (word.charAt(0).toUpperCase() + word.slice(1));
    
    console.log(str2)
    
    return str2
  
  })
  return result.join(' ')
  
})
  return str
}
