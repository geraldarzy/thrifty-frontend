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
            curr.innerHTML+=
            `
            <div class="card col-sm mx-2" style="width: 18rem;">
                <img class="card-img-top" width="200 rem" height="200 rem" alt="" src="${item.picture}">
                <div class="card-body">
                    <h5 class="card-title">Item Name</h5>
                    <h5 class="card-title">$${item.price}</h5>
                    <button class="btn btn-primary" id='item-${item.id}' name='item-${item.id}'>Add to Cart</button>
                </div>
            </div>
            `
            i++;
        }
        Showpage.clearPage();
        document.body.append(div1);
        document.body.append(div2);
        document.body.append(div3);
        document.body.append(div4);
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
}