function validation()
{
    if(document.Formfill.Username.value=="")
    {
        document.getElementById("result").innerHTML="Enter Username";
        return false;
    }
    else if(document.Formfill.Username.value.length<=6)
    {
        document.getElementById("result").innerHTML="Username is At least six letters";
        return false;
    }
    else if(document.Formfill.Email.value=="")
    {
        document.getElementById("result").innerHTML="Enter your Email";
        return false;
    }
    else if(document.Formfill.password.value=="")
    {
        document.getElementById("result").innerHTML="Enter your Password";
        return false;
    }
    else if(document.Formfill.password.value.length<6)
    {
        document.getElementById("result").innerHTML='Password must be 6-digits';
        return false;
    }
    else if(document.Formfill.cpassword.value=="")
    {
        document.getElementById("result").innerHTML="Enter Confirm Password";
        return false;
    }
    else if(document.Formfill.cpassword.value!=document.Formfill.password.value)
    {
        document.getElementById("result").innerHTML="Password doesn't matched";
        return false;
    }
    else if(document.Formfill.password.value==document.Formfill.cpassword.value)
    {
        popup.classList.add('open-slide');

        return false;
    }



}
var popup=document.getElementById('popup');
function closeslide()
{
    popup.classList.remove('open-slide')
}