

var questions = [{
  title: "What does HTML stand for?",
  choices: ["How To Make Lasagna", "Hypertext Markup Language", "Hyper Tool Manufacturing List", "High Tool Meeting Language"],
  answer: "Hypertext Markup Language"
},{
  title: "What does CSS stand for?",
  choices: ["Cascading Style Sheet", "Circulating Style Sheet", "Cascading Summary Sheet", "Circulating Summary Sheet"],
  answer: "Cascading Style Sheet"
},{
  title: "What does JS stand for?",
  choices: ["Jubilean Script", "Java Style", "Java Script", "Java Sheet"],
  answer: "Java Script"
},{
  title: "What type of statement is a Boolean expression?",
  choices: ["Script", "True/False", "String", "Number"],
  answer: "True/Flase"
}];

document.getElementById("start-button").addEventListener("click", function() {
  
window.onload = () => {

  let seconds = 0;
  let totalSeconds = 0;
  
  let intervalId = null;
  
  function startTimer() {
    --totalSeconds;
    hour = Math.floor(totalSeconds /3600);
    minute = Math.floor((totalSeconds - hour*3600)/60);
    seconds = totalSeconds - (hour*3600 + minute*60);

    document.getElementById("seconds").innerHTML =seconds;
  }

  document.getElementById('.start-button').addEventListener('click', () => {
    intervalId = setInterval(startTimer, 1000);
  })
  
}
});