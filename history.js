const header=document.getElementById("header_txt")
const main= document.getElementById("main")
const link=document.getElementById("history_link")

function historyPage(){
    var content=loadEmptyTable()
    
    const toggle=document.getElementById("Search_toggle")
    const search_bar=document.getElementById("search_div")
    search_bar.style.display="none"
    toggle.style.display="none"
    header.textContent="Your History"
    main.innerHTML=content 
    const clear=document.getElementById("clear")
    clear.addEventListener("click",clearHistory)
}
function clearHistory(){
    const conf=confirm("Delete all history ?")
    if(conf){
    localStorage.clear()
    historyPage()
  
    }
    
    
}
function loadEmptyTable(){
    let storage=loadLocalStorage()
    if(storage.length==0){
        content="No History"
    }
    else{
    var content= `<div class="w-10/12 ml-16 ">
    <table class="overflow-x-auto flex item-center  ">
    <tr class="font-medium text-left">
      <th class="px-4 py-2 bg-white rounded-l-lg text-xl">History</th>
      <th class="px-4 py-2 bg-white rounded-r-lg text-xl">Date</th>
    </tr>
   `
    var sty=true
    for(let i=0;i<storage.length/2;i++){
        if(sty){
        content+=`<tr> 
        <td class="px-4 py-2 bg-gray-200 rounded-l-lg">${localStorage.getItem('item'+i)} </td>
        <td class="px-4 py-2 bg-gray-200 rounded-l-lg">${localStorage.getItem('date'+i)} </td>
        </tr>`
        sty=false
    }
    else{
        content+=`<tr> 
        <td class="px-4 py-2 bg-white rounded-l-lg">${localStorage.getItem('item'+i)} </td>
        <td class="px-4 py-2 bg-white rounded-l-lg">${localStorage.getItem('date'+i)} </td>
        </tr>`
     sty=true
    }
}
    content+=`</table><button id="clear" class=" my-4 px-2 py-2 w-auto text-2xl bg-red-200 hover:bg-red-300 rounded-l-lg"> clear history</button>
    </div><br>
    `
    
    return content
}
}


function loadLocalStorage(){
    let keys=Object.keys(localStorage)
    return keys
}

link.addEventListener("click",historyPage)

