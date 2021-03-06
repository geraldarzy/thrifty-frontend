class Item{
    constructor(name,price,size,color,picture,store,sex,id){
        this.name = name;
        this.price = price;
        this.size = size;
        this.color = color;
        this.picture = picture;
        this.store = store;
        this.sex = sex;
        this.id = id
    }

    static getItems = (path = 'items') =>{
        let items = [];
        fetch(`http://localhost:3000/${path}`).then(resp=>resp.json()).then(json=>{
            for(let item of json){
                let i = new Item(item.name, item.price, item.size, item.color, item.picture,item.store,item.sex,item.id)
                items.push(i)
            }
        })
        return items;
    }


    static displayAllItems = (items)=>{
        // let items = Item.getItems();
        Showpage.clearPage();
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let div4 = document.createElement('div');
        let divs = [];
        divs.push(div1,div2,div3,div4)
        for(let div of divs){
            //<div class="row my-3 mx-5">
            div.classList.add('row');
            div.classList.add('my-3');
            div.classList.add('mx-5');
        }
        let i = 0;
        for(let item of items){ 
            let curr = div1;
            if(i >= 4 && i <= 7){
                curr = div2;
            }else if(i >= 8 && i <= 11){
                curr = div3;
            }else if(i >= 12 && i <= 15){
                curr = div4;
            };
            let newdiv = document.createElement('div')
            newdiv.classList.add("card", "col-sm", "mx-2");
            newdiv.style.width = '18rem';
            newdiv.innerHTML =
            `
                <img class="card-img-top" width="200 rem" height="200 rem" alt="" src="${item.picture}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <h6 class="card-title">$${item.price}</h6>
                    <h6 class="card-title">${item.size}</h6>
                    <p>Sold by <a href="${item.store.website}">${item.store.name}</a>, fullfilled by Thrifty ??</p>
                </div>
            `
            curr.append(newdiv);
            // let button = curr.children[curr.childElementCount - 1].children[1].children[2]
            // button.addEventListener('click',(event)=>console.log(event.target.id))
            // button.name =`${item.id}`
            // console.log(`added to ${button.id}`)
            //-------------
            // div.innerHTML+= is basically copying array into a new array instead of appending/pushing to the last index. Therefore the event listeners are lost in the proccess
            //-------------
            let addbuttontome = curr.children[curr.childElementCount-1].children[1]
            let button = document.createElement('button');
            button.classList.add('btn','btn-primary');
            button.id=`item-${item.id}`;
            button.name=`item-${item.id}`;
            button.innerText='Add to Cart'
            button.addEventListener('click',this.addToCart);
            addbuttontome.append(button)
            i++;
        }
        Modals.addAddItemToCartModal();
        
        document.body.append(div1);
        document.body.append(div2);
        document.body.append(div3);
        document.body.append(div4);
        let nav = document.createElement('nav')
        nav.classList.add('centerMe');
        nav.innerHTML=`
        <ul class="pagination centerMe">
          <li class="page-item centerMe">
            <button class="btn btn-outline-secondary" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          <li class="page-item centerMe"><button class="btn btn-outline-secondary" href="#">1</button></li>
          <li class="page-item centerMe"><button class="btn btn-outline-secondary" href="#">2</button></li>
          <li class="page-item centerMe"><button class="btn btn-outline-secondary" href="#">3</button></li>
          <li class="page-item centerMe">
            <button class="btn btn-outline-secondary " href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
        `
        document.body.append(nav)

    }

    // static getMensItems(){
    //     let items = [];
    //     fetch('http://localhost:3000/sexes/1').then(resp=>resp.json()).then(json=>{
    //         for(let i in json){
    //             let item = new Item(json[i].name, json[i].price, json[i].size, json[i].color, json[i].picture)
    //             items.push(item)
    //         }
    //     })
    //     return items;
    // }
    // static displayMensItems(items){

    // }
    static addToCart = (event)=>{
        let item_id = parseInt(event.target.name.split('-')[1]);
        console.log(item_id)
        let user_id = Session.getCookie().id
        if(user_id){
            console.log('hit inside')
            fetch('http://localhost:3000/cart_items',{
                method:'POST',
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    cart_item: {
                        user_id: `${user_id}`,
                        item_id: `${item_id}`
                    }
                })
            }).then(resp=>resp.json()).then(json=>{
                //left off here
                //show that u added it to cart
                //item.name has been added to cart. pop up modal to briefly show cart?
                let modal = document.getElementById('addItemToCartModal');
                modal.children[0].innerText =json["item"].name;
                modal.children[1].src =json["item"].picture;
                let goCheckout = document.getElementById('goToCheckout');
                goCheckout.addEventListener('click',()=>{ $('#addedToCart-modal').modal('hide');Showpage.cartPage(); })
                $('#addedToCart-modal').modal('show');
                //maybe show how many is now in cart?
                console.log(json)
            });
        } else{
            console.log('hitoutside')
            Showpage.account_page();
        }
    }
}