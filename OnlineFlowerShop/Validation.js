function ValidateForm() {
    var flag = true;
    var cardNumber = document.getElementById("txtcardNumber");
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    if( cardNumber.value ==  ""){
        document.getElementById("RequireCard").style.display = "block";
        document.getElementById("ValidCard").style.display = "none";
        flag = false;
    } 
    else if(!cardNumber.value.match(regex)) {
        document.getElementById("RequireCard").style.display = "none";
        document.getElementById("ValidCard").style.display = "block";
        flag = false;
    }   
    else{
        document.getElementById("RequireCard").style.display = "none";
        document.getElementById("ValidCard").style.display = "none";
    }
    
    securityCode = document.getElementById("txtSecurityCode");
    regex = /[0-9][0-9][0-9]/;
    if( securityCode.value ==  ""){
        document.getElementById("RequireCode").style.display = "block";
        document.getElementById("ValidCode").style.display = "none";
        flag = false;
    } 
    else if(!securityCode.value.match(regex)) {
        document.getElementById("RequireCode").style.display = "none";
        document.getElementById("ValidCode").style.display = "block";
        flag = false;
    }
    else{
        document.getElementById("RequireCode").style.display = "none";
        document.getElementById("ValidCode").style.display = "none";
    }
    
    month = document.getElementById("listMonth").selectedIndex;
    year = document.getElementById("listYear").selectedIndex;
    if( month == 0 || year == 0){
        document.getElementById("RequireDate").style.display = "block";
        flag = false;
    } 
    else{
        document.getElementById("RequireDate").style.display = "none";
    }
    
    name = document.getElementById("txtname");
    if (name.value == "") {
        document.getElementById("RequireName").style.display = "block";
        flag = false;
    }
    else{
        document.getElementById("RequireName").style.display = "none";
    }
    
    address = document.getElementById("txtAddress1");
    if (address.value == "") {
        document.getElementById("RequireAddress").style.display = "block";
        flag = false;
    }
    else{
        document.getElementById("RequireAddress").style.display = "none";
    }
    
    city = document.getElementById("txtCity");
    regex = /[a-zA-Z]+(([a-zA-Z ]))$/;
    if (city.value == "") {
        document.getElementById("RequireCity").style.display = "block";
        document.getElementById("ValidCity").style.display = "none";
        flag = false;
    }
    else if(!city.value.match(regex)) {
        document.getElementById("RequireCity").style.display = "none";
        document.getElementById("ValidCity").style.display = "block";
        flag = false;
    }
    else{
        document.getElementById("RequireCity").style.display = "none";
        document.getElementById("ValidCity").style.display = "none";
    }

    postCode = document.getElementById("txtCode");
    regex = /[0-9]{6}/;
    if (postCode.value== "") {
        document.getElementById("RequirePostCode").style.display = "block";
        document.getElementById("ValidPostCode").style.display = "none";
        flag = false;
    }
    else if(!postCode.value.match(regex)) {
        document.getElementById("RequirePostCode").style.display = "none";
        document.getElementById("ValidPostCode").style.display = "block";
        flag = false;
    }
    else{
        document.getElementById("RequirePostCode").style.display = "none";
        document.getElementById("ValidPostCode").style.display = "none";
    }
    
    email = document.getElementById("txtEmail");
    regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value == "") {
        document.getElementById("RequireEmail").style.display = "block";
        document.getElementById("ValidEmail").style.display = "none";
        flag = false;
    }
    else if(!email.value.match(regex)) {
        document.getElementById("RequireEmail").style.display = "none";
        document.getElementById("ValidEmail").style.display = "block";
        flag = false;
    }
    else{
        document.getElementById("RequireEmail").style.display = "none";
        document.getElementById("ValidEmail").style.display = "none";
    }

    var phoneNumber = document.getElementById("txtTelephone");
    var regex = /^[6789]\d{9}$/;
    if (!phoneNumber.value.match(regex)) {
       document.getElementById("ValidMobileNumber").style.display="block";
       flag=false;
    }
    else{
        document.getElementById("ValidMobileNumber").style.display="none";
    }
    
    if(flag == true){
        alert("Paid Sucessfully");
    }    
}
