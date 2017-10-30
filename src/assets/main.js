let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if(answer.value == ""){
      setHiddenFields();
    }

    if(!validateInput(input.value)){
      return false;
    } else {
      attempt.value++;
    }

    if(getResults(input.value)){
      setMessage("You Win! :)");
    } else {
      if(attempt.value >= 10){
        setMessage("You Lose! :(");
      } else {
        setMessage("Incorrect, try again.");
      }
    }
}

function setHiddenFields(){
    var randomNumber = Math.floor(Math.random() * 10000);
    var stringNumber = randomNumber.toString();
    while(stringNumber.length < 4){
       stringNumber = "0" + stringNumber;
    }
    answer.value = stringNumber;
    attempt.value = 0;
}

function setMessage(message){
  let messageLabel = document.getElementById('message');
  messageLabel.innerHTML = message;
}

function validateInput(input){
  if(input.length==4){
    return true;
  }
  setMessage("Guesses must be exactly 4 characters long.");
  return false;
}

function getResults(input){
  var correctGuesses = 0;
  let results = document.getElementById('results');
  var output = results.innerHTML;
  output += '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
  for(var i=0;i<input.length;i++){
    if(input.charAt(i) == answer.value.charAt(i)){
      // Correct Position
      output += '<span class="glyphicon glyphicon-ok"></span>';
      correctGuesses++;
    } else if (charInString(input.charAt(i), answer.value)){
      // Wrong Position
      output += '<span class="glyphicon glyphicon-transfer"></span>';
    } else {
      // Not in the answer
      output += '<span class="glyphicon glyphicon-remove"></span>';
    }
  }
  output+= '</div></div>';
  results.innerHTML = output;
  if(correctGuesses == input.length){
    return true;
  }
  return false;
}

function charInString(char, string){
  for(var i=0;i<string.length;i++){
    if(string.charAt(i) == char){
      return true;
    }
  }
  return false;
}

function showAnswer(win){
  let code = document.getElementById('code');
  code.innerHTML = answer.value;
  if(win){
    code.className += " success";
  } else {
    code.className += " failure";
  }
}
