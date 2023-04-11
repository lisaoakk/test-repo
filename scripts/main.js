
function multiply(num1, num2) {
    var result = num1 * num2;
    return result;
}
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

console.log(multiply(4, 7),
    multiply(20, 20),
    multiply(0.5, 3))


document.querySelector('html').onclick = function () {
    alert('Ouch! Stop poking me!');
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/krasnaya-roza-gran-pri.800x800.jpg') {
      myImage.setAttribute ('src','images/gigant-flowers.jpeg');
    } else {
      myImage.setAttribute ('src','images/krasnaya-roza-gran-pri.800x800.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Roses are red or pinks, ' + myName;
  }
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Roses are red or pinks, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
  