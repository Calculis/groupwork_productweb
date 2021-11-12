const navbar = document.querySelector("#navbar");
let navElem = document.createElement("nav");
navElem.setAttribute("style", "background-color: #ffffff");
navElem.innerHTML = `<div class="bg-white shadow fixed z-50 w-full">
<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <div style="font-size: 24px;" class="ri-game-fill mr-5"></div>
    <a href="/" class="mr-5">Group 4's Gaming Gear Shop</a>
    <div class="md:ml-auto flex flex-wrap items-center text-base justify-center"> 
    
    <span id="history"><button><a id="history_link" >History</a></button></span> 
        <div class="dropdown">
        
            <div class="text-indigo-300 hover:text-white border-2 border-indigo-300 hover:bg-indigo-300 rounded-full transition duration-200 mx-auto px-4 py-2">
            
                <i class="ri-shopping-basket-line"></i> Your Cart
            </div>
            <div class="dropdown-content rounded-lg px-8 bg-indigo-100 mt-0.5 overflow-y-scroll" style="height: 45vh;"></div>
        </div>
        <div id="allprod"></div>
    </div>
</div>
</div>`;
navbar.appendChild(navElem);

const allprod = document.querySelector('#allprod');
allprod.setAttribute('class', 'hidden md:flex items-center space-x-1');

const cartAmount = document.createElement('span');
cartAmount.setAttribute('id', 'allProductInCart');
cartAmount.setAttribute('class', 'ml-4 h-8 w-8 bg-indigo-500 text-white rounded-full flex items-center justify-center');
cartAmount.textContent = '0';
allprod.appendChild(cartAmount);
