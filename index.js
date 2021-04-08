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
    let d = document.getElementById('deleteCookies');
    d.addEventListener('click',deleteAllCookies)
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