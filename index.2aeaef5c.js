new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0}}),new Swiper(".contacts__swiper",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});var e;"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,n=(t.document||t.ownerDocument).querySelectorAll(e),o=0;n[o]&&n[o]!==t;)++o;return Boolean(n[o])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),n=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var n=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+n+'"]').classList.add("active"),t.classList.add("active")}))})),n.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))}));var t,n=0;!function e(){var t,o=document.getElementsByClassName("mySlides");for(t=0;t<o.length;t++)o[t].style.display="none";++n>o.length&&(n=1);o[n-1].style.display="block",setTimeout(e,2500)}(),(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open");bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",o),n.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})(),document.head.appendChild(((t=document.createElement("script")).type="text/javascript",t.async=!0,t.src="https://cdn.jsdelivr.net/npm/christmas-snow-3d/build/snow3d.js",t));const o=document.querySelectorAll("[data-line-effect]");o.length&&o.forEach((e=>{const t=e.querySelectorAll("a"),n=e.dataset.lineEffect?e.dataset.lineEffect:250;t.length&&function(e,t){const n=`transition: transform ${t}ms ease;`,o="transform: translate3d(0px, 0%, 0px);",s="transform: translate3d(0px, -100%, 0px);",c="transform: translate3d(0px, 100%, 0px);";function a(e){const t=e.target,a=t.querySelector(".hover"),r=t.querySelector(".hover__text"),l=t.offsetHeight/2,i=e.pageY-(t.getBoundingClientRect().top+scrollY);"mouseenter"===e.type&&(a.style.cssText=i>l?c:s,r.style.cssText=i>l?s:c,setTimeout((()=>{a.style.cssText=o+n,r.style.cssText=o+n}),5)),"mouseleave"===e.type&&(a.style.cssText=i>l?c+n:s+n,r.style.cssText=i>l?s+n:c+n)}e.forEach((e=>{e.insertAdjacentHTML("beforeend",`\n        <span style="transform: translate3d(0px, 100%, 0px);" class="hover">\n        <span style="transform: translate3d(0px, -100%, 0px);" class="hover__text">${e.textContent}</span>\n        </span>\n        `),e.onmouseenter=e.onmouseleave=a}))}(t,n)}));document.querySelectorAll(".counter").forEach((e=>{e.innerHTML="0";const t=()=>{const n=+e.getAttribute("data-target"),o=+e.innerText;o<n?(e.innerText=o+1,setTimeout(t,120)):e.innerText=n};t()}));
//# sourceMappingURL=index.2aeaef5c.js.map
