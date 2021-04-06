document.addEventListener('DOMContentLoaded',()=>{
    fetch("http://localhost:3000/users").then(resp=>resp.json()).then(json=>{
        console.log(json)
    })
    let welcome = document.getElementsByClassName('welcome')[0];
    let signinbtn = document.getElementById("signinbtn")
    let signupbtn = document.getElementById("signupbtn")
    signupbtn.addEventListener('click',signmeup)
    signinbtn.addEventListener('click',signmein)
    
    function createAccountForm(){
        let form = document.createElement('form')
        form.innerHTML=
        `
        email: <input type='text' id='email'><br>
        password: <input type='text' id='password'><br>
        password confirmation: <input type='text' id='password_confirmation'><br>
        <input type='submit' value='Create Account'>
        `
        return form
    };
    
    function signmeup(){
        let welcome = document.getElementsByClassName('welcome')[0];
        //make it so that the form is infront of the welcome and you cannot click the welcome page
        //you have to exit the form before you can click the welcome page
        showSignupForm();
    };
    
    function showSignupForm(){
        let form = createAccountForm();
        document.body.append(form)
        form.addEventListener('submit',(event)=>{
            event.preventDefault();
            console.log(event);
            console.log(event.target.email.value);
            console.log(event.target.password.value);
            console.log(event.target.password_confirmation.value);
            let email = event.target.email.value;
            let password = event.target.password.value;
            let password_confirmation= event.target.password_confirmation.value;
            signup(email,password,password_confirmation);
            form.reset();
        });
    
    };
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
            console.log(user);
        })
    }
   
});

