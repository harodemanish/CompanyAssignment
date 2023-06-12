







function makePhoneCall(phoneNumber) {
    var telUrl = "tel:" + phoneNumber;
    alert("hey you have to eat medicine on time");
    window.open(telUrl);
  }

  function setAlert() {
    var alertTime = document.getElementById("alertTime").value;
    var currentTime = new Date().toLocaleTimeString();

    if (currentTime === alertTime) {
      makePhoneCall("9511795770");
       alert("hey eat your medicine on time"); // Replace with your desired phone number
    } else {
      setTimeout(setAlert, 1000); // Check every second until the alert time is reached
    }
  }


  function seterror(id,error){
 element = document.getElementById(id);
    element.getElementById("formerror")[0].innerHtml=error;
  }
  function validateform(){
  var returnval =true;
  var name = document.forms['myform']["fname"].value;
if(name.length<5){
seterror("name", "length of eroor is too short")
returnval=false;
}


var phone = document.forms['myform']["fphone"].value;
if(phone.length !=10){
seterror("phone", " please enter ten digit ")
returnval=false;
   
  }
  returnval=false;
}