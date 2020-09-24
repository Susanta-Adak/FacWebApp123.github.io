function formvalidation(){
var first_name= document.getElementById("fname").value;
var first_name_fild= document.getElementById("fname");
var warning= document.getElementById("warning");

  
   if(first_name=="")
   {
     warning.style.display="inline-block";
     first_name_fild.style.border="2px solid red";
     first_name.placeholder.value="bcncb";
     return false;
   }
   if(first_name.length>0){
      warning.style.display="none";
      first_name_fild.style.border="2px solid black";
      return false;
   }
  

}

function openfacebook(){
   window.open("https://www.facebook.com","_self");
}
document.getElementById("header_login").addEventListener("click",openfacebook);
function openyoutube(){
   window.open("https://youtu.be/Q1R5Y1RGxSs","_self");
}
document.getElementById("submit").addEventListener("click",openyoutube);