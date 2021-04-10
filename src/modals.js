class Modals{
    constructor(){

    }

    static showSignupForm(){
        let form = createUserForm();
        document.body.append(form)
        form.addEventListener('submit',(event)=>{
            event.preventDefault();
            let email = event.target.email.value;
            let password = event.target.password.value;
            let password_confirmation= event.target.password_confirmation.value;
            Session.signup(email,password,password_confirmation);
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
            let email = event.target.email.value;
            let password = event.target.password.value;
            Session.signin(email,password);
            //take care of failed validation edge case
            //sign in user after signing up
        });
    };

    static addAddItemToCartModal = (item)=>{

        //------------------------- add modal
        let modal = document.createElement('div');
        modal.classList.add('modal','fade');
        modal.id='addedToCart-modal';
        modal.innerHTML=`
        <div class="modal-dialog">
            <div class = "modal-content">
                
                <div class="modal-header">
                    <h3 class="centerInside">Success!</h3>
                </div>
                <div class="modal-content">
                    <h5 class="centerInside">${item.name}</h5>
                    <h5 class="centerInside">$${item.price}</h5>
                    <h4 class="centerInside">Added to cart</h4>
                </div>
                <div class="modal-footer">
                <button id="hoola" type="button" class="btn btn-default" data-dismiss="modal">Checkout</button>
                <button id="hoola" type="button" class="btn btn-default" data-dismiss="modal">Keep Shopping</button>
                </div>
            </div>
        
        </div>
        `
        document.body.append(modal)
        //------------------------- add modal
    }
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
