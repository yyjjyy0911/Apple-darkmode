function dark_mode(){
  document.querySelector("body").style.backgroundColor="rgb(47, 52, 55)"; 
  document.querySelector("body").style.color="white";
  document.querySelector("header").style.backgroundColor="white";
  document.querySelector("footer").style.backgroundColor="white";
};
function light_mode(){
  document.querySelector("body").style.backgroundColor="white"; 
  document.querySelector("body").style.color="black";
  document.querySelector("header").style.backgroundColor="#ccc";
  document.querySelector("footer").style.backgroundColor="#ccc";
};