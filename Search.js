import { products } from "./products.js";

const productList = document.querySelector("#main");

const chilProduct = productList.childNodes;

const reload = document.getElementById("reload");

reload.addEventListener("click", back_to_main);

let searchbt = document.getElementById("Search");

let sbt = document.getElementById("sbt");

searchbt.addEventListener(
  "click",
  () => {
    SearchButton();
  },
  false
);

function SearchButton() {
  var inputName = sbt.value;
  header_txt.textContent = `All Matching Product : ${inputName}`;
  const reg = new RegExp(inputName.toLowerCase());
  console.log(inputName.length == 0);
  if (inputName.length == 0) {
    alert("Please Reload Pages");
  } else {
    for (let i = 0; chilProduct.length > i; i++) {
      let productName = products[i].name;
      let productId = document.getElementById(productName);
      let productParent = productId.parentNode;
      if (productName.toLowerCase().match(reg) != null) {
        productParent.style.display = "block";
      } else {
        productParent.style.display = "none";
      }
    }
  }
}

const back_to_main = () => {
  for (let i = 0; chilProduct.length > i; i++) {
    chilProduct[i].style.display = "block";
  }
};
