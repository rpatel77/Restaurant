(()=>{"use strict";const e=document.getElementById("content");function t(t){let n;switch(function(){for(;e.firstChild;)e.removeChild(e.firstChild)}(),t){case"home":default:n=function(){const e=document.createElement("div");return e.textContent="HOME PAGE!",e.style.backgroundColor="green",e.style.padding="20px",e.style.borderRadius="5px",e}();break;case"menu":n=function(){const e=document.createElement("div");return e.textContent="Here is the Menu Page!",e.style.backgroundColor="#ff9800",e.style.padding="20px",e.style.borderRadius="5px",e}();break;case"about":n=function(){const e=document.createElement("div");return e.textContent="Learn more About Us!",e.style.backgroundColor="#8bc34a",e.style.padding="20px",e.style.borderRadius="5px",e}();break;case"contact":n=function(){const e=document.createElement("div");return e.textContent="Get in touch with us on the Contact Page!",e.style.backgroundColor="#03a9f4",e.style.padding="20px",e.style.borderRadius="5px",e}()}e.appendChild(n)}window.navigateTo=t,t("home"),document.addEventListener("DOMContentLoaded",(()=>{t("home")}))})();