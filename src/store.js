class Store{
    constructor(name,website){
        this.name = name;
        this.website = website;
    }
    static getStores(){
        let stores = [];
        fetch('http://localhost:3000/stores').then(resp=>resp.json()).then(json=>{
            for(let i in json){
                let store = new Store(json[i].name, json[i].website)
                stores.push(store)
            }
        })
        return stores;
    }
}