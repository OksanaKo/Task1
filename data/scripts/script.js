window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


window.onload = function() {typeWriter()};

var i = 0;
var txt = 'Вітаємо на сайті Студентської ради факультету прикладної математики та інформатики!';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("txtWriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}