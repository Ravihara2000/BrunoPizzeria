function validate()
{
    //variable declaration
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var pwd1 = document.getElementById("pwd1").value;
    var pwd2 = document.getElementById("pwd2").value;
   
    var numErrors = 0;
   
//show alerts if condition is not true
    if((fname) == false)
    {
        alert("Please enter your first name");//error messege
        ++numErrors;
    }

    if((lname) == false)
    {
        alert("Please enter your last name");
        ++numErrors;
    }

    
    if((email) == false)
    {
        alert("Please enter your email");
        ++numErrors;
    }
//check the password length
    if((pwd1.length) < 7)
    {
        alert("Please enter a password at least 8 digits");
        ++numErrors;
    }
//check whether the two passwords are equal
    if((pwd1) != (pwd2))
    {
        alert("you entered password incorrectly. Please enter again");
        ++numErrors;
    }

    if(numErrors > 0)
    {
        return false;
    }
    

    else
    {
        alert("Registration success")
        return true;
    }
}





function init()
{
    //details form declare and assign all the details to details form 
    var test = document.getElementById("detailsform");
    test.onsubmit = validate;//if the submit button requested, form is been validated
}


//after alll the pages loaded this thing will execute
window.onload = init;