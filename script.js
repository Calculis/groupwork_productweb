export const main =document.getElementById("main")
import { set_cart_btn } from "./cart.js"
import { products } from "./products.js"
var count=1
export const header_txt=document.getElementById("header_txt");
export function load_mainpage(products){
for(const p of products){
    
    const container=document.createElement("div")
    container.setAttribute("id",`product${String(count)}`)
    count+=1
    
    for(const l in p){
       
        if(l == "img"){
        const img=document.createElement("img")
        img.setAttribute("src",p[l])
        img.setAttribute("class","rounded-xl mb-4 object-cover mb-4 shadow-lg transform hover:-translate-y-1 cursor-pointer transition duration-500 hover:shadow-2xl")
        // img.setAttribute("width","300px")
        // img.setAttribute("height","250px")
        container.insertBefore(img,container.childNodes[0])
        }
        else if(l == "name"){
            const text = document.createElement("p")
            text.setAttribute("id",p[l])
            text.textContent= `${l}:${p[l]}`
            text.setAttribute("class","hover:text-white hover:bg-indigo-300 px-4")
            container.appendChild(text)

        }
        else if(l == "id"){
            const text = document.createElement("p")
            text.setAttribute("id",p[l])
            text.textContent= `${l}:${p[l]}`
            text.setAttribute("class","hover:text-white hover:bg-indigo-300 px-4")
            container.appendChild(text)

        }
        else{
        const text = document.createElement("p")
        text.setAttribute("class","hover:text-white hover:bg-indigo-300 px-4")
        text.textContent= `${l}:${p[l]}`
        container.appendChild(text)
        // const text= 
        // console.log(text);
    }
   
    }
    const addBtn=document.createElement("button")
    addBtn.className="add"
    addBtn.setAttribute(
        "class",
        "mt-12 w-full bg-indigo-400 transition duration-200 rounded-md py-3 px-3 flex items-center justify-center text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      );
    addBtn.textContent="Add to cart"
    container.appendChild(addBtn)
    main.appendChild(container)
    
    
}
    set_cart_btn()
    header_txt.textContent="All Product"

}
load_mainpage(products)
