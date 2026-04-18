console.log("Login successfully");


document.getElementById("login-btn").addEventListener("click", function(){
    //1.get the mobile number input
    const numberInput= document.getElementById("input-number");
    const contactNumber= numberInput.value;
    console.log(contactNumber);
    //2. get the pin input
    const pinInput= document.getElementById("input-pin");
    const pin= pinInput.value;
    console.log(pin);
    //3. match the number and the pin
    if(contactNumber=="01516528440" && pin=="1234"){
        //3.1 true::: alert>> login successfully
        alert("Login Successfully");
        window.location.assign("/home.html")
    }
    
    else{
        //3.2 false::: alert>> login failed
        alert("Login Failed");
    }
})