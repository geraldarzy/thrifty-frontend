class User{
    constructor(id,email){
        this.id = id;
        this.email = email;
    }
    setUserCookie = ()=>{
        document.cookie.split('; ').reduce((prev, current) => {
            const [name, value] = current.split('=');
            prev[name] = value;
            return prev
        }, {});
    }
}