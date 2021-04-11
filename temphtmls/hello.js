document.addEventListener('DOMContentLoaded',()=>{
    let b = document.getElementById('clickme');
    b.addEventListener('click',(event)=>alert(`I am an alert box! And here is the event ${event}`));
});