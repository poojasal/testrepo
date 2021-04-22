function submtn1()
{
    var username = document.getElementById("name");
   var emailid   = document.getElementById("email");  

   if(username.value == "")
   {
        alert("Please enter the name");
        username.focus();
        return false;
    }

    if(emailid.value == "")
    {
        alert("Please enter the email");
        emailid.focus();
        return false;
    }

    alert("submission done yes");
    return true;
}
