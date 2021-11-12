const header=document.getElementById("header_txt")
const main= document.getElementById("main")
const link=document.getElementById("history_link")
const clear=document.getElementById("clear")
function historyPage(){
    var content=loadEmptyTable()
    
    const toggle=document.getElementById("Search_toggle")
    const search_bar=document.getElementById("search_div")
    search_bar.style.display="none"
    toggle.style.display="none"
    header.textContent="Your History"
    main.innerHTML=content
    clear.addEventListener("click",clearHistory)
   
}
function loadEmptyTable(){
    let storage=loadLocalStorage()
    if(storage.length==0){
        content="No History"
    }
    else{
    var content= `
    <table>
    <tr>
    <th>History</th>
    <th>Date</th>
    </tr>
   `
   
    for(let i=0;i<storage.length/2;i++){
        content+=`<tr> 
        <td>${localStorage.getItem('item'+i)} </td>
        <td>${localStorage.getItem('date'+i)} </td>
        </tr>`
    }
}
    content+=`</table>
    <button id="clear"> clear history</button>
    `
    
    return content
}


function loadLocalStorage(){
    let keys=Object.keys(localStorage)
    return keys
}
function clearHistory(){
    localStorage.clear()
    loadEmptyTable()
}
link.addEventListener("click",historyPage)

