// universal variables
let input = document.getElementById("input");
let output = document.getElementById("outputText");
let charCount= document.getElementById("charCount");
let html = '';

// turn everything upercase function
function upperCase(){
    html=input.value.toUpperCase();
    output.innerHTML=html;
}

// turn everything lowercase function
function lowerCase(){
    html=input.value.toLowerCase();
    output.innerHTML=html;
}

// capitalizing every word function
function capitalize(){
    let inputArray = input.value.split(" ");
    let capitalWord = inputArray.map((words) => words.charAt(0).toUpperCase() + words.slice(1),);
    html = capitalWord.join(" ");
    output.innerHTML = html;
}

//removing extra spaces
function removeExtra(){
    html=input.value.trim();
    output.innerHTML = html;
}

//replacing a word
function replaceWord(){
    let replaced = prompt("Please enter the word you want to replace", "Shabingus");
    let replacement = prompt("Please enter the replacement word", "Shabongus");
    html = input.value.replace(replaced, replacement);
    output.innerHTML = html;
}

//counting total number of characters
function countChars(){
    charCount.innerHTML = input.value.length;
}
