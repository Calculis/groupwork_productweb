import {cart} from "./cart.js"

const items=cart
function setCookie(){
    for(let i=0;i<items.length;i++){
        const cookieText=encodeURIComponent(`name=${"item"+(i+1)} ;value=id:${items[i].id},quantity:${items[i].quantity};max-age=${60*60*24}`)
        document.cookie=cookieText
    }

}
window.onbeforeunload=setCookie
