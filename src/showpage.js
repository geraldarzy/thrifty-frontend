class Showpage{
    constructor(){
        
    }
    static logged_in_home(){
        let homepage = document.getElementsByClassName('welcome')[0];
        let userform = document.getElementById('user-form');
        userform.remove();
        homepage.remove();
    }
}