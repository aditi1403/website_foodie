var hoverDiscount = document.querySelector(".home-page-written h1");
var locationInput = document.querySelector(".home-page-written input[type=text]");
var newsletterSubsription = document.querySelector(".subscription-box input[type=submit]");

console.log(hoverDiscount);

discountAlert=()=>{
    console.log("hovered");
    alert("Congratulations! You are getting upto 75% discount on your orders today!")
}
hoverDiscount.addEventListener("mouseover",discountAlert);

locationAlert=()=>{
    console.log("mousedown");
    alert("Start typing your pin-code.")
}
locationInput.addEventListener("mousedown",locationAlert);

memberAlert=()=>{
    console.log("mouseup");
    alert("Thankyou for subscription! Now you are our valued member.")
}
newsletterSubsription.addEventListener("mouseup",memberAlert);
document.querySelector(".subscription-box input[type=submit]").style.cursor="pointer";

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
      console.log("entered");
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + "'"+ user + "'"+" Hope you were refreshed last time you visited!");
    } else {
       user = prompt("We have potential to make your stressed day fresh! Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }
// window.location.replace("http://www.w3schools.com");
