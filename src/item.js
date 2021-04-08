class Item{
    constructor(name,price,size,color,picture){
        this.name = name;
        this.price = price;
        this.size = size;
        this.color = color;
        this.picture = picture;
    }

    static getItems(){
        let items = [];
        fetch('http://localhost:3000/items').then(resp=>resp.json()).then(json=>{
            for(let i in json){
                let item = new Store(json[i].name, json[i].website)
                items.push(item)
            }
        })
        return items;
    }
}