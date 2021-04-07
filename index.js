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
        showSignupForm();
    };
    function showSignupForm(){
        let form = createUserForm();
        document.body.append(form)
        form.addEventListener('submit',(event)=>{
            event.preventDefault();
            console.log('show sign up form');
            console.log(event);
            console.log(event.target.email.value);
            console.log(event.target.password.value);
            console.log(event.target.password_confirmation.value);
            let email = event.target.email.value;
            let password = event.target.password.value;
            let password_confirmation= event.target.password_confirmation.value;
            signup(email,password,password_confirmation);
            //take care of failed validation edge case
            //sign in user after signing up
        });
    
    };
    //---------- user form used to create a new account or to sign in
    function createUserForm(){
        let form = document.createElement('form')
        form.id = 'user-form'
        form.innerHTML=
        `
        <span id = 'userformEmail'>
            email: <input type='text' id='email'>
        </span>

        <br>

        <span id = 'userformPassword'>
            password: <input type='text' id='password'>
        </span>

        <br>

        <span id = 'userformConfirm'>
            password confirmation: <input type='text' id='password_confirmation'>
        </span>

        <br>

        <input type='submit' value='Create Account'>
        `
        return form
    };
    // ------------------handling sign me in click
    function signmein(){
        showSignInForm();

    };
    function showSignInForm(){
        let form = createUserForm();
        form.children[6].value = 'Sign In'
        form.children[4].remove() //change the form to sign in before displaying it
        document.body.append(form)
        form.addEventListener('submit',(event)=>{
            event.preventDefault();
            console.log('show sign in form');
            console.log(event);
            console.log(event.target.email.value);
            console.log(event.target.password.value);
            let email = event.target.email.value;
            let password = event.target.password.value;
            signin(email,password);
            //take care of failed validation edge case
            //sign in user after signing up
        });
    };

    // ---------------------------------sign up and sign in fetch functions----------------
    function signup(email,password,password_confirmation){
        fetch("http://localhost:3000/users",{
            method:'POST',
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user: {
                    email: `${email}`,
                    password: `${password}`,
                    password_confirmation: `${password_confirmation}`
                }
            })
        }).then(resp=>resp.json()).then(json=>{
            let user = new User(json.id,json.email);
            document.cookie = `logged_in = true`
            document.cookie = `id = ${user.id}`
            document.cookie = `email = ${user.email}` //store id and email in the browsers cookies and say that you are logged in
            // delete elements on page and show store elements
            leaveHomePage();
            //take care of the error showings
        })
    }

    function signin(email,password){
        fetch("http://localhost:3000/sessions",{
            method:'POST',
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                credentials:'include'
            },
            body: JSON.stringify({
                user: {
                    email: `${email}`,
                    password: `${password}`
                }
            })
        }).then(resp=>resp.json()).then(json=>{
            let user = new User(json.session.id,json.session.email); //make new user with info
            document.cookie = `logged_in = true`
            document.cookie = `id = ${user.id}`
            document.cookie = `email = ${user.id}` //store id and email in the browsers cookies and say that you are logged in
            // delete elements on page and show store elements
            leaveHomePage();
            //take care of the error showings
        }).catch(error=>console.log(error))
    }
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