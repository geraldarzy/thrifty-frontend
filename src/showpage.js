class Showpage{
    constructor(){
        
    }

    static clearPage(){
        for(let i = 0;i<(document.body.childElementCount);i++){
            document.body.children[1].remove(); //always remove index 1 because next element goes to index 1 when removing 1
        }
    }

    static logged_in_home(){
        Showpage.clearPage();
        let div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('text-white');
        div.classList.add('bg-dark');
        div.innerHTML = 
        `
        <img class="card-img blurme" src="https://cdn.discordapp.com/attachments/390970702897086465/829467787789074482/Macklemore-Ryan-Lewis-Thrift-Shop-still-billboard-650-1548-compressed.jpg" height="270 px"width="840 px"alt="Card image">
        <div class="card-img-overlay">
            <h1 class="card-title centerInside">Thrifty.</h1> 
            <div class = 'centerInside'>
                <button class = 'btn btn-light mx-2' > Shop Mens </button>
                <button class = 'btn btn-light mx-2' > Shop All </button>
                <button class = 'btn btn-light mx-2' > Shop Womens </button>
            </div>
        </div>
        `;
        document.body.append(div)
    }

    static account_page(){
        Showpage.clearPage();
        let cookie = Session.getCookie();
        if(cookie.logged_in === 'true'){
            let div = document.createElement('div')
            div.innerHTML = 
            `
            <h1>Show Account Info and Stuff</h1>
            `
            document.body.append(div)
        } else {
            let div = document.createElement('div');
            div.classList.add('welcome')
            div.innerHTML=
            `
            <h1>Welcome to Thrifty.</h1>
            <button id = "signupbtn" class ='btn btn-light'>Sign Up</button>
            <button id = "signinbtn" class ='btn btn-light'>Sign In</button>
            `;
            document.body.append(div);
            let welcome = document.getElementsByClassName('welcome')[0];
            let signinbtn = document.getElementById("signinbtn")
            let signupbtn = document.getElementById("signupbtn")
            signupbtn.addEventListener('click',Modals.showSignupForm)
            signinbtn.addEventListener('click',Modals.showSignInForm)
        }
    }
}