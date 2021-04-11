class Modals{
    constructor(){

    }

    static showSignupForm(){
        $('#signinupModal').modal('hide');
        let form = createUserForm();
        let div = document.createElement('div');
        div.classList.add('modal','fade');
        div.id='signup-form';
        div.innerHTML=`
        <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class = "modal-content">
            <button type="button" class="btn btn-outline-info" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                
        </div>
        
    </div>`
        div.children[0].children[0].append(form);
        document.body.append(div);
        $('#signup-form').modal('show');
        form.addEventListener('submit',(event)=>{
            event.preventDefault();
            let email = event.target.email.value;
            let password = event.target.password.value;
            let password_confirmation= event.target.password_confirm.value;
            Session.signup(email,password,password_confirmation);
            //take care of failed validation edge case
            //sign in user after signing up
        });
    
    };
    static showSignInForm(){
        $('#signinupModal').modal('hide');
        let form = createUserForm();
        let div = document.createElement('div');
        div.classList.add('modal','fade');
        div.id='signin-form';
        div.innerHTML=`
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class = "modal-content">
                <button type="button" class="btn btn-outline-info" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                
            </div>
        
        </div>`
        div.children[0].children[0].append(form);
        document.body.append(div);
        $('#signin-form').modal('show');
        
        document.getElementById('submitUserForm').value='Sign In'
        document.getElementById('userformConfirm').remove() //change the form to sign in before displaying it
        form.addEventListener('submit',(event)=>{
            event.preventDefault();
            let email = event.target.email.value;
            let password = event.target.password.value;
            Session.signin(email,password);
            //take care of failed validation edge case
            //sign in user after signing up
        });
    };

    static addSignInUpModal = () =>{
        let div = document.createElement('div')
        div.classList.add('modal','fade');
        div.id="signinupModal"
        div.innerHTML = `
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class = "modal-content">
                
                <div class="modal-header">
                  <h3>Thrifty!</h3>
                  <button type="button" class="btn btn-outline-info" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <div class="modal-content">
                    <p class="centerOnlyMe centerText" >Welcome! </p>
                    <p class="centerOnlyMe centerText">The place to shop from all of your favorite Thrift Stores!</p>
                    <p class="centerOnlyMe centerText"> To continue shopping, please sign in to your account.</p>
                    <br>
                    <div class='centerInside'>
                      <button type="button" class="btn btn-dark" style="margin: 1rem;" id="signupbtn">Sign Up</button> 
                      <button type="button" class="btn btn-dark" style="margin: 1rem;" id="signinbtn">Sign In</button>
                    </div>
                    <br>
                    <br>
                </div>
            </div>
            
        </div>
        `
        document.body.append(div)

    }


    static addAccountInfoModal = ()=>{
        let div = document.createElement('div')
            div.classList.add('modal','fade');
            div.id="loggedInInfo"
            div.innerHTML = 
            `
            <div class="modal-dialog">
            <div class = "modal-content">
                
                <div class="modal-content">
                    <div class='row'>
                        <div class='col-sm'>
                            <fieldset disabled>
                                <div class="mb-3">
                                    <label for="disabledTextiInput" class="form-label"><h5>Name:</h5></label>
                                    <input type="text" id="disabledTextiInput" class="form-control" placeholder="John Doe">
                                </div>
                            <div class="mb-3">
                                <label for="disabledTextInput" class="form-label"><h5>Email:</h5></label>
                                <input type="text" id="disabledTextInput" class="form-control" placeholder="${Session.getCookie()['email']}">
                            </div>
                            </fieldset>
                            </div>
                            <div class='col-sm'></div>
                        </div>
                        </div>
                        <div class="modal-footer">
                        <button class='btn btn-secondary' id='logMeOutButton'>Log Out</button>
                        </div>
                        </div>
                        
                        </div>
                        `
    //                     <!-- $('#myModal').modal('toggle');
    // $('#myModal').modal('show');
    // $('#myModal').modal('hide'); -->
                        document.body.append(div)
    }
    static addAddItemToCartModal = ()=>{
        //------------------------- add modal
        let modal = document.createElement('div');
        modal.classList.add('modal','fade');
        modal.id='addedToCart-modal';
        modal.innerHTML=`
        <div class="modal-dialog">
            <div class = "modal-content">
                <div id="addItemToCartModal" class="modal-content">
                    <h5 class="centerInside">Item</h5>
                    <img class="centerInside centerMe"src="" width='50px' height='200px'>
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

    static makeCartModal=(items)=>{
        let div = document.createElement('div')
        div.classList.add('modal','fade');
        div.id="cartModal"
        div.innerHTML = `
        <div class="modal-dialog">
            <div class = "modal-content">
                    
                <div class="modal-header">
                    <h1>Cart</h1>
                    <button type="button" class="btn btn-outline-info" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <div class="modal-content" id="cart-content">

                </div>
                <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-dismiss="modal">Checkout</button>
                </div>
            </div>
        </div>

        `
        document.body.append(div);
        let subtotal = 0;
        let cart_content = document.getElementById('cart-content');
        for(let item of items){
            let innerdiv = document.createElement('div')
            innerdiv.classList.add('card');
            innerdiv.innerHTML=`
            <div class="card-body">
                <h4 class="card-title">${item.name}</h4>
                <h6 class="card-subtitle mb-2 text-muted">${item.size}</h6>
                <img src="${item.picture}" width='125px' height='200px'>
                <p>Sold by <a href="${item.store.website}" class="card-link">${item.store.name}</a> fullfilled by Thrifty©</p>
                <h5 class="card-subtitle mb-2">$${item.price}</h5>
                <button class="btn btn-light">Remove</button>
            </div>
            `
            subtotal +=item.price
            cart_content.append(innerdiv)
        }
        // -----------------subtotal
        let subtotalele = document.createElement('h6');
        subtotalele.innerHTML= `Sub-total: $${subtotal}.00`
        //-------------------shipping
        let shipping = 8;
        let shippingele=document.createElement('h6');
        shippingele.innerHTML=`Shipping: $${shipping} `
        if(subtotal>49){
            shipping=0;
            shippingele.innerHTML+=` (- $8.00 Free Shipping)`
        }
        //-------------------tax
        let tax = ((subtotal+shipping)*.08)
        let taxele = document.createElement('h6');
        taxele.innerHTML=`Tax: $${tax}`
        //-------------------total
        let total = (subtotal+tax+shipping)
        let totalele = document.createElement('h6');
        totalele.innerHTML=`Total: $${total}`


        cart_content.append(subtotalele)
        cart_content.append(shippingele)
        cart_content.append(taxele)
        cart_content.append(totalele)
    }
}
function createUserForm(){
    let form = document.createElement('form')
    form.id = 'user-form'
    form.style='padding:5rem;'
    form.innerHTML=
    `
    <div class="form-floating centerInside" id = 'userformEmail'>
                        <input type="email" class="form-control" id="email" placeholder="name@example.com">
                        <label for="email">Email address</label>
                    </div>
                    <div class="form-floating centerInside" id = 'userformPassword'>
                        <input type="password" class="form-control" id="password" placeholder="Password">
                        <label for="password">Password</label>
                    </div>
                    <div class="form-floating centerInside" id = 'userformConfirm'>
                        <input type="password" class="form-control" id="password_confirm" placeholder="Password Confirm">
                        <label for="password_confirm">Password Confirm</label>
                    </div>
                    <div class = "centerInside">
                        <input id='submitUserForm' type='submit' value='Create Account' class='btn btn-outline-dark centerMe'>
                    </div>
    `
    return form
};
