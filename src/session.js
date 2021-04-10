class Session{

    static getCookie(){
        let cookie = document.cookie.split('; ').reduce((prev, current) => {
            const [name, value] = current.split('=');
            prev[name] = value;
            return prev
        }, {});
        return cookie
    }

    static signup(email,password,password_confirmation){
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
            $('#signup-form').modal('hide'); //hide signup form after signusucces
            //take care of the error showings
        })
    }


    static signin(email,password){
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
            document.cookie = `email = ${user.email}` //store id and email in the browsers cookies and say that you are logged in
            // delete elements on page and show store elements
            Showpage.logged_in_home();
            //take care of the error showings
        }).catch(error=>console.log(error))
    }

    static logOut() {
        let cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
        $('#loggedInInfo').modal('hide'); //hide modal after logging out
    }
}