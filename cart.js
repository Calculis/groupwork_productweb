import { CookieUtil } from "./cookie.js"
import { products } from "./products.js"

// set add to cart button
const addBtn=document.getElementsByClassName("add")
export const drop=document.getElementsByClassName("dropdown-content")
export const cart=[]
export const allChild=main.childNodes
const resetBtn = document.createElement("button")
resetBtn.id="reset"
resetBtn.textContent="Empty Cart"
resetBtn.setAttribute("class","hover:bg-white px-4 py-2 rounded-xl")
drop[0].appendChild(resetBtn)
let cartAmount = document.querySelector('#allProductInCart');

export function getObjbyId(id){
    products.find(item=>
        item.id==id
    )
}
export function set_cart_btn(){
for(let i=0;i<allChild.length;i++){
    const id=allChild[i].firstChild.nextSibling.id
    const bt=allChild[i].lastChild;
    bt.addEventListener("click",()=>{
        if(cart_duplicate(id)==false){
    //         const choose_item= {"id":id,name:document.getElementById(id).nextSibling.id,quantity:1}
    // cart.unshift(choose_item)
           const choose_item= {"id":id,name:document.getElementById(id).nextSibling.id,quantity:1}
            cart.unshift(choose_item)
            const menu=document.createElement("a")
            menu.id= id
            menu.textContent= `id:${choose_item.id} Name:${choose_item.name} quantity:1`
            // let menu=addToList(id)
            drop[0].insertBefore(menu,drop[0].firstChild);
            
            CookieUtil.set(`${choose_item.name}`, cart.length, Date(60*60*24));
            // console.log(drop[0]);
         
        }
        else{
           const target= cart.find( item=> item["id"]==id )
           target["quantity"]+=1
           const no_ch=drop[0].childNodes
            for(let k=0;k<no_ch.length;k++){
                if(target.id==no_ch[k].id){
                    no_ch[k].textContent=`id:${no_ch[k].id} Name:${target.name} quantity:${target.quantity}`
                }
            }
        }
        cartAmount.textContent = countProduct();
        console.log(cart);
    })
}
}
// create tag for dropdown
export function addToList(obj,qty=1){
    
    const menu=document.createElement("a")
    menu.id= obj

    menu.textContent= `id:${obj["id"]} Name:${obj["name"]} quantity:${qty==1?1:qty}`
    return menu

}
//Count Product In Cart
function countProduct() {
    var total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].quantity;
            CookieUtil.set("Total",total)
        }
    return total;
}

const cart_duplicate=(id)=>{
  for(let i=0;i<cart.length;i++){
      if(cart[i].id==id){
          return true
      }
  }
  return false
}
const resetCart=()=>{
    const confirm_del=confirm("Delete all item in your cart?")
    if(confirm_del){
    cart.length=0
    do{
        var all_item=document.querySelector(".dropdown-content a")
        if(all_item==null){
            break
        }
        all_item.remove()
        CookieUtil.clearCartCookies()
    }
    while(all_item!=null)
}

cartAmount.textContent = countProduct.length;
}
resetBtn.addEventListener("click",resetCart)



