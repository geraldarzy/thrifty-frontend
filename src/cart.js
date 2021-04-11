class Cart{
    constructor(){

    }
    static getCart = (user_id) =>{
        //logged in or not get the cart info - SRP
        //to use this method, if user logged in, pass in user_id from the cookie
        let cart = [];
        fetch(`http://localhost:3000/carts/${user_id}`).then(resp=>resp.json()).then(json=>{
            //new Item(name,price,size,color,picture,store,sex,id)
            //alot more info that we can get from here, you can still get user info from here
            for(let item of json.items){
                let newItem = new Item(item.name,item.price,item.size,item.color,item.picture,item.store,item.sex,item.id)
                cart.push(newItem);
            }
        });
        return(cart)
    }

}