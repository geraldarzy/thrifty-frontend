document.addEventListener('DOMContentLoaded',()=>{
    fetch("http://localhost:3000/users").then(resp=>resp.json()).then(json=>{
        console.log('domcontentloaded')
        console.log(json)
    })
    let welcome = document.getElementsByClassName('welcome')[0];
    let signinbtn = document.getElementById("signinbtn")
    let signupbtn = document.getElementById("signupbtn")
    signupbtn.addEventListener('click',signmeup)
    signinbtn.addEventListener('click',signmein)
    
    //--------------------- handling of signmeup click
    function signmeup(){
        let welcome = document.getElementsByClassName('welcome')[0];
        //make it so that the form is infront of the welcome and you cannot click the welcome page
        //you have to exit the form before you can click the welcome page
        //or
        //welcome.remove();
        Modals.showSignupForm();
    };
    //---------- user form used to create a new account or to sign in
    
    // ------------------handling sign me in click
    function signmein(){
        Modals.showSignInForm();

    };

    function leaveHomePage(){
        let homepage = document.getElementsByClassName('welcome')[0];
        let userform = document.getElementById('user-form');
        userform.remove();
        homepage.remove();
    }
    let clearcookies = document.getElementById('clearcookies');
    clearcookies.addEventListener('click',deleteAllCookies)
    function deleteAllCookies() {
        var cookies = document.cookie.split(";");
    
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }
});