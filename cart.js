// set add to cart button
const addBtn=document.getElementsByClassName("add")
const cart=[]
const allChild=main.childNodes
for(let i=0;i<allChild.length;i++){
    const id=allChild[i].firstChild.nextSibling.id
    const bt=allChild[i].lastChild;
    bt.addEventListener("click",()=>{
        if(cart_duplicate(id)==false){
            cart.unshift({"id":id,quantity:1})
           
        }
        else{
           const target= cart.find( item=> item["id"]==id )
           target["quantity"]+=1
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

