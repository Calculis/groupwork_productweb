import {cart} from "./cart.js"
import { products } from "./products.js"
import { addToList,drop,updateAmount} from "./cart.js"


function synchornizeCart(){
    let cookies=document.cookie
    if(cookies.length>1){
        const cookie_arr=cookies.split(";")
        
        cookie_arr.forEach(cookie=>{
            cookie=decodeURIComponent(cookie)
            const name=cookie.substring(0,cookie.indexOf('='))
            const val=parseInt(cookie.substring(cookie.indexOf('=')+1,cookie.length))
            const prod=products.find(x=> x.name.trim()==name.trim())
            addToList(prod,val)
            updateAmount()
            
        })
    }
    up

}
window.addEventListener('load',
    synchornizeCart
)

export class CookieUtil {
    static get(name) {
      let cookieName = `${encodeURIComponent(name)}=`,
        cookieStart = document.cookie.indexOf(cookieName),
        cookieValue = null;
      if (cookieStart > -1) {
        let cookieEnd = document.cookie.indexOf(";", cookieStart);
        if (cookieEnd == -1) {
          cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(
          document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
        );
      }
      return cookieValue;
    }
  
    static set(name, value, expires) {
      let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
      if (expires instanceof Date) {
        cookieText += `; expires=${expires.toUTCString()}`;
        // cookieText += `; expires=${expires}`;
      }
      document.cookie = cookieText;
    }
  
    static unset(name) {
      CookieUtil.set(name, "", new Date(0));
    }

    static clearCartCookies(){
        const c=document.cookie
        const cookie=c.split(";")
        cookie.forEach(c=>{
            const eqPos=c.indexOf("=")
            document.cookie=c.substring(0,eqPos+1)+";expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    
        })
    }
  }
