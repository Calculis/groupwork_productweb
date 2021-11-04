// set add to cart button
const addBtn=document.getElementsByClassName("add")
const drop=document.getElementsByClassName("dropdown-content")
const cart=[]
const allChild=main.childNodes
// var itemcount=1
for(let i=0;i<allChild.length;i++){

    const id=allChild[i].firstChild.nextSibling.id
    const bt=allChild[i].lastChild;
    bt.addEventListener("click",()=>{
        if(cart_duplicate(id)==false){
            cart.unshift({"id":id,quantity:1})
            const menu=document.createElement("a")
            menu.id= id
            menu.textContent= `id:${id} quantity:1`
            drop[0].appendChild(menu);
            // itemcount++
            console.log(drop[0]);
         
        }
        else{
           const target= cart.find( item=> item["id"]==id )
           target["quantity"]+=1
           const no_ch=drop[0].childNodes
            for(let k=0;k<no_ch.length;k++){
                if(target.id==no_ch[k].id){
                    no_ch[k].textContent=`id:${no_ch[k].id} quantity:${target.quantity}`
                }
                    
                
            }
            

           

        }

    })
}

const cart_duplicate=(id)=>{
  for(let i=0;i<cart.length;i++){
      if(cart[i].id==id){
          return true
      }
  }
  return false
}

// เหลือเพิ่มปุ่ม ล้างตะกร้า