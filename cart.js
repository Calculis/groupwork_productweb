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
export let cartAmount = document.querySelector('#allProductInCart');

export function getObjbyId(id){
    return products.find(item=>
        item.id==id
    )
    
}
  

export function set_add_btn(){
   
    for(let i=1;i<products.length+1;i++){
        const product_page=document.getElementById(`product${i}`)
        const product_id=product_page.firstChild.nextSibling.id
        const button=product_page.querySelector("button")
        button.addEventListener("click",()=>{
            if(!cart_duplicate(product_id)){
            addToList(getObjbyId(product_id))}
            else{
                setItemInCart(product_id)
            }
            
        })
    }
}
// create tag for dropdown
function setItemInCart(id){
    const item=findItemInCart(id)
    item.quantity+=1
    setDropDownQty(id,item.quantity)
}
function setDropDownQty(id,qty){
    const dropdown_item=document.getElementById(`dropdown_item${id}`)
    if(dropdown_item==null) return
    const obj=findItemInCart(id)
    dropdown_item.textContent=`id:${obj["id"]} Name:${obj["name"]} quantity:${qty}`
    updateAmount()
}
export function addToList(obj,qty=1){ 
    // const menu=document.createElement("a")
    if(obj.id!=null){
    // menu.id= obj.id
    // menu.textContent= `id:${obj["id"]} Name:${obj["name"]} quantity:${qty}`
    // drop[0].insertBefore(menu,drop[0].firstChild);
    cart.unshift({id:obj.id,name:obj.name,quantity:qty})
    addToDropDown(obj,qty)
    }
}
function addToDropDown(obj,qty){
    const menu=document.createElement("a")
    menu.id= `dropdown_item${obj.id}`
    menu.textContent= `id:${obj["id"]} Name:${obj["name"]} quantity:${qty}`
    drop[0].insertBefore(menu,drop[0].firstChild);
    updateAmount()
}
export function updateAmount(){
    cartAmount.textContent = countProduct();
}
//Count Product In Cart
function countProduct() {
    var total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].quantity;
        }
        // CookieUtil.set("Total",total)
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
const findItemInCart=(id)=>{
    return cart.find(item=> item.id==id )
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



