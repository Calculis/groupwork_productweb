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
 // flow การทำงาน ที่แก้ไข

 // 1. set_add_btn() จะถูกเรียกใช้ตอนโหลดหน้าเว็บหลักมา 
 // หน้าที่ของ function นี้คือ ไป set event ให้ปุ่ม add to cart ให้เวลากดแล้วจะเกิด event บางอย่าง

 // 2. เมื่อปุ่มถูกกดจะเกิดการทำงานได้ 2 กรณี

 //   1) ถ้ากดแล้วเพิ่มของที่ไม่มีใน cart (เช็คโดยการใช้ function cart_duplicate) 
 //      ให้ไปเรียก ฟังก์ชัน addToCart ทำหน้าที่รับ object มาหากไม่เป็น  null ก็จะเพิ่มเข้า cart
 //      และไปเรียก addToDropDown ต่อ โดยมันจะไปสร้าง link ใน drowdrop เพิ่มโดยมี quantity=1
 //      และสร้างคุ้กกี้ และก็เรียกใช้ updateAmount คือการอัพเดทให้เลขจำนวนของตรงกับจำนวนในตะกร้า
 //    
 //   2) ถ้ากดแล้วของซำ้กับใน cart จะไปเรียกใช้ function setItemInCart แทน โดยมีหน้าที่
 //      รับ id ไปแล้วไปทำ mapping กับข้อมูลในตะกร้า แล้วแก้ไขให้ quantity เพิ่มขึ้น 1
 //      แล้วเรียกใช้ function setDropDownQty โดยรับ id ของสินค้ามา แล้วนำไป map กับ link dropdown
 //      แล้วแก้ไข textcontent ให้ quantity ตรงกับในตะกร้า  และ set cookie และ เรียกใช้
//       update Amount เพื่ออัพเดทให้ตัวเลขที่แสดงตรงกับจำนวนใน cart 

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
    CookieUtil.set(`${obj.name}`,obj.quantity, Date(60*60*24));
    updateAmount()
}
export function addToList(obj,qty=1){ 
    if(obj.id!=null){
    cart.unshift({id:obj.id,name:obj.name,quantity:qty})
    addToDropDown(obj,qty)
    }
}
function addToDropDown(obj,qty){
    const menu=document.createElement("a")
    menu.id= `dropdown_item${obj.id}`
    menu.textContent= `id:${obj["id"]} Name:${obj["name"]} quantity:${qty}`
    drop[0].insertBefore(menu,drop[0].firstChild);
    CookieUtil.set(`${obj.name}`,qty, Date(60*60*24));
    updateAmount()
}
export function updateAmount(){
    cartAmount.textContent = countProduct();
}

//Count Product In Cart
function countProduct() {
    // var total = 0;
        // for (let i = 0; i < cart.length; i++) {
        //     total += cart[i].quantity;
        // }
    // let itemQuantity = item.quantity
    
    if(cart.length==1){

        return cart[0].quantity
        
        }
        
        const total= cart.reduce((prod1,prod2)=> prod1.quantity+prod2.quantity)
        
        console.log(total);
        
        return total

    // return total;
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



