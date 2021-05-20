// Function to find whether letter is present in the sentence or not.
function findLetter (sentenceSelector,letterSelector) {
    var sentenceValue = document.getElementById(sentenceSelector).value;
    var letterValue = document.getElementById(letterSelector).value;
    var index = sentenceValue.indexOf(letterValue);
    if (index == -1) {
        document.getElementById("output").innerHTML = "Result: The letter does not exist in the sentence";
    }
    else{
       document.getElementById("output").innerHTML = "Result: "+sentenceValue.slice(index+1);
    }
}

function displayString () {}

function showOutput () {}
