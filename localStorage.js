const searchbt=document.getElementById("Search")
var count=localStorage.length/2
// let sbt = document.getElementById("sbt");
function keepHistory(){
    const inputName = sbt.value;
    sbt.value=""
    
    if(inputName!=""){
    addToLocal(inputName)
    console.log(inputName);
    }
    


}
function addToLocal(item){

   localStorage.setItem(`item${count%20}`,item)
   let d=new Date()
   var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
   d.getHours() + ":" + d.getMinutes();
   localStorage.setItem(`date${count%20}`,datestring)
   count++
    
}

searchbt.addEventListener("click",keepHistory)
