import { products } from "./products.js"

const productList = document.querySelector('#main');

let inputName = document.filter(Name => Name.name.includes(""));

let searchbt = document.getElementById('sbt')

searchbt.addEventListener('click', () =>{
    SearchButton();
    },false)

function SearchButton(){
    let s = document.getElementById('sbt').value.toLowerCase();
    inputName = products.filter(Name => Name.name.toLowerCase().includes(`${s}`));
    console.log(input.length == 0);
    let chilProduct = productList.children;
    if(inputName.length == 0){
        for(let a of chilProduct){
            a.style.display = 'none';
        }
    }else{
        for(let a of chilProduct){
            for(let b of inputName){
                if(a.id == b.id){   
                    a.style.display = '';
                    break;
                }else{
                    a.style.display = 'none';
                }
            }
        }
    }
}