import { products } from "./products.js";

const productList = document.querySelector("#main");

const chilProduct = productList.childNodes;

const reload = document.getElementById("reload");

let searchbt = document.getElementById("Search");

let sbt = document.getElementById("sbt");

const search_toggle=document.getElementById("Search_toggle") // search click to expand

const search_tab= document.getElementById("search_div"); // search input

searchbt.addEventListener(
  "click",
  () => {
    SearchButton();
  },
  false
);

// ฟังก์ชันการทำงานของปุ่ม Search เมื่อกดแล้วจะเรียกฟังก์ชัน SearchButton มาใช้งาน
// โดยจะเก็บค่าของคำที่ค้นหาไว้ที่ตัวแปร inputName
// แล้วนำ Inputname ไปใส่ค่าที่อยู่ที่หัวข้อหน้าเว็บว่าค้นหาคำว่าอะไรไป
// ตัวแปร reg จะเป็นตัวแปรที่แปลงค่าที่ได้รับมาให้เป็นตัวอักษรตัวเล็ก
// เข้าเงื่อนไขถ้าไม่มีค่าอะไรในช่องค้นหาจะขึ้น alert มาว่า Please Reload Pages
// ถ้าเป็น else จะเข้า for loop เพื่อเช็ตทุกค่าที่เก็บไว้มาจาก inputName โดยเทียบกับ produxts.name
// ใช้ DOM ในการดึงข้อมูลออกมาแสดงข้อมูลในหน้าเว็บโดยที่จะถ้าข้อึวามที่พิมพ์ไปตรงกับชื่อของสินค้าจะให้ display เป็น black ให้แสดงออกมา
// ถ้าไม่ตรงก็จะให้ display เป็น none เพื่อซ่อนเอาไว้
function SearchButton() {
  var inputName = sbt.value;
  console.log("Test");
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
// เป็นฟังก์ชันที่จะแสดงสินค้าทั้งหมดเมื่อกดปุ่ม reload 
const back_to_main = () => {
  for (let i = 0; chilProduct.length > i; i++) {
    chilProduct[i].style.display = "block";
  }
};
reload.addEventListener("click", back_to_main);

// เป็นฟังก์ชีนที่จะให้ช่องค้นหาแสดงออกมา
const toggle_bar=()=>{
  search_toggle.style.display='none'
  search_tab.style.display="block"
}

search_toggle.addEventListener("click",toggle_bar)