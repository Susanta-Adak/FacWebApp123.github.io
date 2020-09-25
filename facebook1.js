var first_name = document.getElementById("fname");
var warning = document.getElementById("warning");

var last_name= document.getElementById("lname");
var warning1= document.getElementById("warning1");

var user_name= document.getElementById("username");
var warning2= document.getElementById("warning2");

var password= document.getElementById("password");
var warning3= document.getElementById("warning3");

var day=document.getElementById("day");
var month=document.getElementById("month");
var year=document.getElementById("year");

var male=document.getElementById("male");
var female=document.getElementById("female");
var other=document.getElementById("other");

function formvalidation(){
  

  //start of first name validaction
   if(first_name.value == "")
   {
     warning.style.display="inline-block";
     first_name.style.border="2px solid red";
     
   }
     else{
      warning.style.display="none";
      first_name.style.border="2px solid #2980b9";
      
   }

   //start of last name validaction
   if(last_name.value == "")
   {
     warning1.style.display="inline-block";
     last_name.style.border="2px solid red";
   }
   else{
     warning1.style.display="none";
      last_name.style.border="2px solid #2980b9";
   }
  
   //start of  name validaction
   
   if(user_name.value=="")
   {
     warning2.style.display="inline-block";
     user_name.style.border="2px solid red";
   }
   else{
      warning2.style.display="none";
      user_name.style.border="2px solid #2980b9";
   }
 //start of  password validaction
   if(password.value=="")
   {
     warning3.style.display="inline-block";
     password.style.border="2px solid red";
   }
   else{
      warning3.style.display="none";
      password.style.border="2px solid #2980b9";
     
   }
   // start of day validation
   if(day.value=="Day")
   {
     day.style. border="2px solid red";
   }
   else{
    day.style. border="1px solid white";
   }

    // start of dob validation
    if(month.value=="Month")
    {
      month.style. border="2px solid red";
    }
    else{
      month.style. border="1px solid white";
    }

    // start of dob validation
    if(year.value=="Year")
    {
      year.style. border="2px solid red";
    }
    else{
      year.style. border="1px solid white";
      
    }
}