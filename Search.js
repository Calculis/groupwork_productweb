import { products } from "./products.js"

const productList = document.querySelector('#main');

// let inputName = productList.filter(Name => Name.name.includes(""));

let searchbt = document.getElementById('Search')
let sbt = document.getElementById('sbt')

searchbt.addEventListener('click', () =>{
    SearchButton();
    },false)

function SearchButton(){
    var inputName = sbt.value;
    console.log(inputName.length == 0);
    let chilProduct = productList.childNodes;
    if(inputName.length == 0){
    }else{
        // for(let a of chilProduct){
        //     for(let b of inputName){
        //         if(a.id == b.id){   
        //             a.style.display = '';
        //             break;
        //         }else{
        //             a.style.display = 'none';
        //         }
        //     }
        // }

        for(let i = 0; chilProduct.length > i; i++){
            let productName = products[i].name
            if(productName == inputName){ 
            }else{
                let productId = document.getElementById(productName)
                let productParent = productId.parentNode
                productParent.style.display = 'none';
            }
        }
    }
}