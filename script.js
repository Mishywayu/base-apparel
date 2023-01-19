// function checkEmail() {
//     var email = document.getElementById('txtEmail');
//     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

//     if (!filter.test(email.value)) {
//         // alert('Please provide a valid email address');
//         document.getElementById('input').style.border = "2px solid red";
//         document.getElementById('p1').innerHTML = "Please enter a valid email address";
//         email.focus;
//         return false;
//     }
// }

function check()
{
  if(!document.getElementById("subscribe-email").checkValidity())
  {

    //do stuff here ie. show errors
    alert("input not valid!");

  }else
  {
      callMeIfValid();
  }
}

function callMeIfValid()
{
  //submit form or whatever
  alert("valid input");
}