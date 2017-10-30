let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if(answer.value == ""){
      setHiddenFields();
    };

    //add functionality to guess function here
};

function setHiddenFields(){
    var randomNumber = Math.floor(Math.random() * 10000);
    var stringNumber = randomNumber.toString();
    while(stringNumber.length < 4){
       stringNumber = "0" + stringNumber;
    }
    answer.value = stringNumber;
    attempt.value = 0;
};

function setMessage(var message){
  let messageLabel = document.getElementById('message');
  messageLabel.innerHTML = message;
};
