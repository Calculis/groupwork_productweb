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
    var content= `<div>
    <table class="table-auto border-collapse w-full">
        <tr class="border-b border-gray-200 font-medium py-10">
            <td class="pt-8 px-44 py-4 text-lg">History</td>
            <td class="text-lg px-56 py-4">Date</td>
        </tr>`
   
    for(let i=0;i<storage.length/2;i++){
        content+=`<tr class="hover:bg-white"> 
        <td class="pt-8 px-44 py-4">${localStorage.getItem('item'+i)} </td>
        <td class="pt-8 px-44 py-4">${localStorage.getItem('date'+i)} </td>
        <td class="pt-8 px-44 py-4">
        <button id="clear" class="ri-delete-bin-line items-center justify-center w-8 h-8 transition-colors duration-150 rounded-full focus:shadow-outline border border-gray-50 shadow-lg bg-white hover:bg-red-400 hover:text-white hover:border-transparent" style="font-size: 18px;">
        </button>
        </td>
        </tr>`
        sty=false
    }
   
}
    // content+=`</table></div><br>
    // <button id="clear"> clear history</button>
    // `
    
    return content
}



function loadLocalStorage(){
    let keys=Object.keys(localStorage)
    return keys
}

link.addEventListener("click",historyPage)

