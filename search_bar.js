const searchBtn=document.getElementById("searchBtn") // button
const search_txt=document.getElementById("search_txt") // input txt

import { header_txt } from "./productList.js"
import { products } from "./products.js"
import { load_mainpage, main } from "./productList.js"

const get_product=()=>{
    const product_txt=search_txt.value
    return product_txt;
}
const search_product=()=>{
    const result=get_product()
    const reg=new RegExp(result.toLowerCase());
    console.log(result);
    const g_match=[]
    
    if(result==""){
        // return no page
        alert("please input search")
        
       
        return
    }
    
    products.forEach(item => {
       if( item.name.toLowerCase().match(reg)!=null){
        g_match.unshift(item)
    }

}
);
    if(g_match.length==0){
        alert("product not found")
       
        
        
    }else{
    removePage()
    load_mainpage(g_match)
    header_txt.textContent=`All Matching Product : ${result}`
}

     
}
function removePage(){
    const count=main.childNodes.length
    console.log(main.childNodes);
   for(let i=0;i<count;i++){
       main.removeChild(main.firstChild)
   }
   console.log(main.childNodes);
  
}


searchBtn.addEventListener("click",search_product)
const back_to_main=()=>{
    removePage()
    load_mainpage(products)
}
const reload=document.getElementById("reload")
reload.addEventListener("click",back_to_main)

