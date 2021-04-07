class Showpage{
    constructor(){
        
    }
    static logged_in_home(){
        Showpage.clearPage();
    }
    static clearPage(){
        for(let i = 0;i<(document.body.childElementCount);i++){
            console.log('childcount before' + document.body.childElementCount)
            console.log('remove child' + i)
            document.body.children[1].remove(); //always remove index 1 because next element goes to index 1 when removing 1
            console.log("count after " + document.body.childElementCount)
        }
    }
}