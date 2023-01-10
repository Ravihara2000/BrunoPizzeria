//variable declration

function validate()
{
    var deli = document.getElementById("deli").checked;
    var pick = document.getElementById("pick").checked;

    var pickk = document.getElementById("pickk").checked;
    var onl = document.getElementById("onl").checked;
  
    var quantity = document.getElementById("quantity").value;
    var baddress = document.getElementById("baddress").value;
    var post = document.getElementById("post").value;
    var daddress = document.getElementById("daddress").value;
    var sameaddress = document.getElementById("sameaddress").value;
    var email = document.getElementById("email").value;
    var mnumber = document.getElementById("mnumber").value;
   
    var ccn = document.getElementById("ccn").value;
    var ccp = document.getElementById("ccp").value;
    
   
    var numErrors = 0;
//show alerts if condition is not true
    if((quantity) == false)
    {
        alert("Please enter the Quantity");//alert messege
        ++numErrors;
    }

    if((deli == "") && (pick == ""))
    {
        alert("Order type must be selected");
        ++numErrors;
    }

    if((baddress) == false)
    {
        alert("Please enter your billing address");
        ++numErrors;
    }

    if((daddress) == false)
    {
        alert("Please enter your delivery address");
        ++numErrors;
    }

    if((post) == false)
    {
        alert("Please enter your post code");
        ++numErrors;
    }

     
   //check post code length

    if((post.length) != 4)
    {
        alert("Your post code is incorrect");
        ++numErrors;
    }


    if((email)== false)
    {
        alert("Please enter your email");
        ++numErrors;
    }


    if((mnumber) == false)
    {
        alert("Please enter your mobile number");
        ++numErrors;
    }
    

    if((ccn) == false)
    {
        alert("Please enter your credit card number");
        ++numErrors;
    }
//check the credit card number length
    if((ccn.length) != 16)
    {
        alert("you entered invalid creditcard number");
        ++numErrors;
    }

    
//check the security code number of digits
    if((ccp.length) !=8)
    {
        alert("your security code is invalid");
        ++numErrors;
    }

    

    if(numErrors > 0)
    {
        return false;
    }

    else
    {
        alert("Success ")
        return true;
    }

}
//hide card details
function disableElement1()
{
    document.getElementById("hidepay").style.display = "none";
}
//hide billing ad and post code thigs
function disableElement()
{
    document.getElementById("paymethod").style.display = "none";
   
}
//get the same address function
function copyAddress()
{
    if(document.getElementById("sameaddress").value == "yes")
    {
        document.getElementById("daddress").value = document.getElementById("baddress").value;
    }
}



function init()
{
    var test = document.getElementById("orform");
    test.onsubmit = validate;

    var test2 = document.getElementById("sameaddress");
    test2.onchange = copyAddress;


}



window.onload = init;