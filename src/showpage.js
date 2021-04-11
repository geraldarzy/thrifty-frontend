class Showpage{
    constructor(){
        
    }

    static clearPage(){
        // for(let i = 0;i<(document.body.childElementCount);i++){
        //     console.log(i)
        //     console.log(document.body.childElementCount)
        //     debugger;
        //     document.body.children[1].remove(); //always remove index 1 because next element goes to index 1 when removing 1
        // }
        while(document.body.childElementCount>1){
            document.body.children[1].remove()
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
                <button class = 'btn btn-light mx-2' id= 'shopmensbtn'> Shop Mens </button>
                <button class = 'btn btn-light mx-2' id= 'shopallbtn'> Shop All </button>
                <button class = 'btn btn-light mx-2' id= 'shopwomensbtn'> Shop Womens </button>
            </div>
        </div>
        `;
        document.body.append(div)
        let shopmensbtn= document.getElementById('shopmensbtn')
        let shopallbtn= document.getElementById('shopallbtn')
        let shopwomensbtn= document.getElementById('shopwomensbtn')

        shopmensbtn.addEventListener('click', Showpage.shopMensPage)
        shopallbtn.addEventListener('click', Showpage.shopAllPage)
        shopwomensbtn.addEventListener('click', Showpage.shopWomensPage)
    }

    static cartPage = async()=>{
        let id = Session.getCookie().id;
        if(id){
            //if logged in do this
            //append the modal div
            //then un-hide it
            let items = await Cart.getCart(parseInt(id));
            await fetch('http://localhost:3000/carts');
            await fetch('http://localhost:3000/carts');
            await fetch('http://localhost:3000/carts');
            await fetch('http://localhost:3000/carts');
            await fetch('http://localhost:3000/carts');
            await Modals.makeCartModal(items);
            //there is a bug bc we keep making new cart modals, only make modal if users first time making or added more to cart
            //once cartModal is made, toggle cartModal counter to 1; if add more to cart toggle back to 0;
            //if 1 show; if 0 make then show
            $('#cartModal').modal('show');

        }else{
            //if not logged in do this
            this.account_page();
        }
    }

    static account_page(){
        let cookie = Session.getCookie();
        if(cookie.logged_in === 'true'){
            Modals.addAccountInfoModal();
            $('#loggedInInfo').modal('show');
            document.getElementById('logMeOutButton').addEventListener('click',Session.logOut)
        } else {
            Modals.addSignInUpModal();
            $('#signinupModal').modal('show');
            let signinbtn = document.getElementById("signinbtn")
            let signupbtn = document.getElementById("signupbtn")
            signupbtn.addEventListener('click',Modals.showSignupForm)
            signinbtn.addEventListener('click',Modals.showSignInForm)
        }
    }
    
    static shopAllPage = async() => {
        let items = await Item.getItems();
        await fetch('http://localhost:3000/items') //idk why this is needed, let items does not await properly unless the fetch is also awaited
        Item.displayAllItems(items);
    }
    static shopMensPage= async() => {
        let items = await Item.getItems('sexes/1');
        await fetch('http://localhost:3000/items')
        Item.displayAllItems(items);
    }
    static shopWomensPage = async() => {
        let items = await Item.getItems('sexes/2');
        await fetch('http://localhost:3000/items')
        Item.displayAllItems(items);
    }
}