document.addEventListener('DOMContentLoaded',()=>{
    fetch("http://localhost:3000/users").then(resp=>resp.json()).then(json=>{
        console.log('domcontentloaded')
        console.log(json)
    })
    // ------navbar stuff
    let navAccount = document.getElementById('navAccount')
    navAccount.addEventListener('click', Showpage.account_page)
    let navHome = document.getElementById('navHome')
    navHome.addEventListener('click', Showpage.logged_in_home)
    let navLogo = document.getElementById('navLogo')
    navLogo.addEventListener('click', Showpage.logged_in_home)
    //---------------------------------------------------------------------------------------------------

});
/*
EDGE CASES TO TAKE CARE OF
- When signup fails show error of why failed (duplicate emails? bademail? bad password?)
- When Log in fails
- when there are more than 16 items on page
- When add to cart fails

*/