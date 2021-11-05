const navbar = document.querySelector("#navbar");
let navElem = document.createElement("nav");
navElem.setAttribute("style", "background-color: #ffffff");
navElem.innerHTML = `<div class="bg-white shadow fixed z-50 w-full">
<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <div style="font-size: 24px;" class="ri-game-fill mr-5"></div>
    <div class="mr-5">Group 4's Gamimg Gear Shop</div>
    <div class="md:ml-auto flex flex-wrap items-center text-base justify-center">
   
<div class="dropdown">
 <div class="text-indigo-300 hover:text-white border-2 border-indigo-300 hover:bg-indigo-300 rounded-full transition duration-200 mx-auto px-4 py-2">
 
<i class="ri-shopping-basket-line"></i> Your Cart

</div>
<div class="dropdown-content rounded-lg px-8 bg-indigo-100 mt-0.5 overflow-y-scroll" style="height: 45vh;">
  
</div>

</div>
   
    </div>
   
    </div>
</div>
</div>`;
navbar.appendChild(navElem);