class Cart{
    constructor(){

    }
    static getCart = (user_id) =>{
        //logged in or not get the cart info - SRP
        //to use this method, if user logged in, pass in user_id from the cookie
        let cart = [];
        fetch(`http://localhost:3000/carts/${user_id}`).then(resp=>resp.json).then(json=>{
            //new Item(name,price,size,color,picture,store,sex,id)
            for(item in json){
                debugger;
            }
        });
    }

}