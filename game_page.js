player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

question_turn = "player_1";
answer_turn = "player_2";

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn : " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn : " + player2_name;

function send()
{
    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    console.log(actual_answer);

    
    question_word = "<h4>Q. " + number1 + " x " + number2 + "</h4>";
    input_box = "<br> answer : <input type = 'text' id = 'input_check_box'>";
    check_button = "<br> <br> <button class = 'btn btn-info' onclick = 'check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById('output').innerHTML = row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
 }

 function check()
 {
     get_answer = document.getElementById("input_check_box").value;
     
     if (get_answer == actual_answer){
         if (answer_turn == "player_1"){
             player1_score = player1_score + 1;
             document.getElementById("player1_score").innerHTML = player1_score;
         }
         else {
             player2_score = player2_score +1;
             document.getElementById("player2_score").innerHTML = player2_score;
         }
     }

     if (question_turn == "player_1"){
         question_turn = "player_2";
         document.getElementById("player_question").innerHTML = "Question Turn :" + question_turn;
     }
     else {
         question_turn = "player_1";
         document.getElementById("player_question").innerHTML = "Question Turn :" + question_turn;
     }

     if (answer_turn == "player_1"){
         answer_turn = "player_2";
         document.getElementById("player_answer").innerHTML = "Answer Turn :" + answer_turn;
     }
     else {
         answer_turn = "player_1"
         document.getElementById("player_answer").innerHTML = "Answer Turn :" + answer_turn;
     }

     document.getElementById('output').innerHTML = "";
 }