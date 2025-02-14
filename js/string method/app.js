// String.includes()

let text = "Hello, World";
console.log(text.includes("World"));



const userRole = "admin editor";

function checkPermission(userRole,permission){
    if(userRole.includes(permission)){
        return `User has ${permission} permission`;
    }else{
        return `User does not have ${permission} permission`;
    }
}

console.log(checkPermission(userRole,"admin"));
// console.log(checkPermission(userRole,"moderator"));


function containsForbiddenWords(sentence, forbiddenWords) {
    return forbiddenWords.some(word => sentence.includes(word));
  }
  
  // Example usage:
  console.log(containsForbiddenWords("You are awesome", ["hate", "stupid", "ugly"]));  // false
  console.log(containsForbiddenWords("I hate this", ["hate", "stupid", "ugly"]));  // true
  


function findMissingWords(sentence,words){
    return words.filter(word => !sentence.includes(word));
}
console.log(findMissingWords("I love JavaScript and coding", ["JavaScript", "Python", "coding"]));  
