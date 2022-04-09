var txt = 'bash Cody_Nguyen.sh';
var delay = 50;
var i = 0;

function Typing() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt[i];
    i++;
    setTimeout(Typing, delay);
  }
}

function homeAnimation() {
  var header = "Hello World. I'm Cody.<br><span style='font-weight:100'>Texas A&M Computer Engineering</span>";
  var wait = txt.length * delay + 500;
  Typing();
  setTimeout(function(){
    document.getElementById("intro_text").innerHTML = header;
  }, wait);
  
}