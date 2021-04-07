class Modals{
    constructor(){

    }

    static showSignupForm(){
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
    static showSignInForm(){
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
}
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