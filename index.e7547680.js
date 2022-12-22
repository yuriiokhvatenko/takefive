var counters=document.querySelectorAll(".counter");counters.forEach((function(e){e.innerHTML="0";var t=function(){var n=+e.getAttribute("data-target"),r=+e.innerText;r<n?(e.innerText=r+1,setTimeout(t,120)):e.innerText=n};t()}));
//# sourceMappingURL=index.e7547680.js.map
