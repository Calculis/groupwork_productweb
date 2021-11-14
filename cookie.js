import {cart} from "./cart.js"
import { products } from "./products.js"
import { addToList,drop } from "./cart.js"
const items=cart
function setCookie(){
    let count=1
    clearCartCookies()
for (const iterator of items) {
    
    const txt= (`${encodeURIComponent('item'+count)}=${iterator.id}|${iterator.quantity};max-age=${60*60*24}`)
    document.cookie=txt
    count++
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
function synchornizeCart(){
    const cookies=document.cookie.split(";") //แยก cookie 
    
    // console.log(cookies.length!=1);
    if(cookies.length!=1){
    cookies.forEach(item=>{
        const sValue=item.indexOf("=") // indexเริ่มต้นของ value
        item=item.substring(sValue+1,item.length)
        const set=item.split("|")
        const id=set[0]
        const qty=set[1]
        const c =products.find(item=> item["id"]==id)
        const name=c["name"]
        // console.log(id);
        // console.log(qty);
        // console.log(name);
       let menu= addToList(c,qty)
        drop[0].insertBefore(menu,drop[0].firstChild);
        
    })
}
    // console.log(document.cookie);

}



window.onbeforeunload=setCookie
window.onload=synchornizeCart


