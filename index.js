document.addEventListener('DOMContentLoaded',()=>{
    fetch("http://localhost:3000/users").then(resp=>resp.json()).then(json=>{
        console.log(json)
    })
    let welcome = document.getElementsByClassName('welcome')[0];
    let signinbtn = document.getElementById("signinbtn")
    let signupbtn = document.getElementById("signupbtn")
    signupbtn.addEventListener('click',signmeup)
    signinbtn.addEventListener('click',signmein)
});

