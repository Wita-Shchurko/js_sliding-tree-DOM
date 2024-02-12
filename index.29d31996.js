var e=document.querySelector(".tree");document.querySelectorAll("li").forEach(function(e){if(e.querySelector("ul")){var t=document.createElement("span");t.append(e.firstChild),e.firstChild.parentNode.insertBefore(t,e.firstChild)}}),e.addEventListener("click",function(e){if("SPAN"===e.target.tagName){var t=e.target.nextElementSibling;"block"===getComputedStyle(t).getPropertyValue("display")?t.style.display="none":t.style.display="block"}});//# sourceMappingURL=index.29d31996.js.map

//# sourceMappingURL=index.29d31996.js.map
