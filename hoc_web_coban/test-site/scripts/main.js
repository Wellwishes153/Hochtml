const myImage = document.querySelector('img');
myImage.onmouseover = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === './images/firefox.jpg') {
    myImage.setAttribute('src','./images/tuyet.jpg');
  }
    else if (mySrc === './images/tuyet.jpg') {
  myImage.setAttribute('src','./images/hoaanhdao.jpg');
  } else {
    myImage.setAttribute('src','./images/firefox.jpg');
  }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  if(!localStorage.getItem('myName')) {
    let myName = prompt('Xin hay nhap ten ban :');
    if(!myName){
      setUserName(); 
    } else{
       localStorage.setItem('name', myName);
       myHeading.textContent = `Mozilla is cool, ${myName}`;
    } 
  } else{
    let myName = localStorage.getItem('myName');
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
} 

myButton.onclick = () => {
  setUserName();
}
