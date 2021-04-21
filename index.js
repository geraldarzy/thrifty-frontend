document.addEventListener('DOMContentLoaded',()=>{
    // ------navbar stuff
    let navAccount = document.getElementById('navAccount')
    navAccount.addEventListener('click', Showpage.account_page)
    let navHome = document.getElementById('navHome')
    navHome.addEventListener('click', Showpage.logged_in_home)
    let navLogo = document.getElementById('navLogo')
    navLogo.addEventListener('click', Showpage.logged_in_home)
    let navCart = document.getElementById('navCart')
    navCart.addEventListener('click', Showpage.cartPage)
    //---------------------------------------------------------------------------------------------------
    
    //---- load home page right away
    Showpage.logged_in_home();

    let clickforsale = document.getElementById('clickforsale');
    clickforsale.addEventListener('click',(e)=>{
        e.target.innerText+='!';
    })
});
/*
EDGE CASES TO TAKE CARE OF
- When signup fails show error of why failed (duplicate emails? bademail? bad password?)
- When Log in fails
- when there are more than 16 items on page
- When add to cart fails

*/