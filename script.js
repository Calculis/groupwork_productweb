const main =document.getElementById("main")

import { products } from "./products.js"

for(const p of products){
    const container=document.createElement("div")
    container.setAttribute("class","product")
    for(const l in p){
       
        if(l == "img"){
        const img=document.createElement("img")
        img.setAttribute("src",p[l])
        img.setAttribute("width","200px")
        img.setAttribute("height","200px")
        container.insertBefore(img,container.childNodes[0])
        }
        else{
         const text = document.createElement("p")
        text.setAttribute("class","detail")
        text.textContent= `${l}:${p[l]}`
        container.appendChild(text)
        // const text= 
        // console.log(text);
    }
    }
    main.appendChild(container)
    
}