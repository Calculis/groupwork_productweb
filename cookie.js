import {cart} from "./cart.js"

const items=cart
function setCookie(){
    let count=1
    clearCartCookies()
for (const iterator of items) {
    
    const txt= (`${encodeURIComponent('item'+count)}=${iterator.id}|${iterator.quantity};max-age=${60*60*24}`)
    document.cookie=txt
    count++

    // console.log(iterator.id);
    // console.log(iterator.quantity);
    
}

    }
   

function clearCartCookies(){
    const c=document.cookie
    const cookie=c.split(";")
    cookie.forEach(c=>{
        const eqPos=c.indexOf("=")
        document.cookie=c.substring(0,eqPos+1)+";expires=Thu, 01 Jan 1970 00:00:00 UTC;"

    })
}


window.onbeforeunload=setCookie

