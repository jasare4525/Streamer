import{cfetch}from"./cfetch-min.js";import{navigate}from"./pages-min.js";import{description}from"./pop-min.js";import{storePlayState}from"./storeplayState.js";import{getPlayState}from"./storeplayState.js";let count=!0,c=!0;document.querySelector(".movieContainer").addEventListener("click",description),document.body.addEventListener("click",description),document.body.addEventListener("click",navigate);const vid=document.getElementById("video");vid.addEventListener("play",getPlayState);const check=()=>{0!==vid.currentTime&&setInterval(storePlayState,1e3)};setInterval(check,1e3),document.querySelector(".burgerContainer").addEventListener("click",e=>{(e.target.classList.contains("line")||e.target.classList.contains("burgerContainer")||e.target.classList.contains("fa-arrow-right"))&&(document.querySelector(".side-nav").classList.toggle("toggle"),document.querySelectorAll(".category li").forEach(e=>{e.classList.toggle("toggle")}),c?document.querySelectorAll(".navigation i").forEach(e=>{e.style.display="none",c=!1}):(c=!0,document.querySelectorAll(".navigation i").forEach(e=>{e.style.display="flex"})))});const sn=document.querySelector(".side-nav"),n=document.querySelector(".navigation");function checkLength(){pageYOffset<600?(n.style="backdrop-filter: blur(10px)",sn.style="backdrop-filter: blur(10px)",sn.style.transition="all 0.5s linear",document.querySelectorAll(".side-nav p").forEach(e=>{e.style.color="white"}),document.querySelectorAll(".navigation p").forEach(e=>{e.style.color="white"}),document.querySelectorAll(".line").forEach(e=>{e.style.backgroundColor="white"}),document.querySelector(".account-modal").style.top=pageYOffset+"px",document.querySelector(".movieDesDisplay").style.top=pageYOffset+380+"px"):(sn.style.transition="all 0.5s linear",sn.style.background="white",n.style.background="white",document.querySelectorAll(".side-nav p").forEach(e=>{e.style.color="black"}),document.querySelectorAll(".line").forEach(e=>{e.style.backgroundColor="black"}),document.querySelectorAll(".navigation p").forEach(e=>{e.style.color="black"}),document.querySelector(".account-modal").style.top=pageYOffset+"px",document.querySelector(".movieDesDisplay").style.top=pageYOffset+380+"px")}window.onscroll=checkLength,window.onload=cfetch,firebase.auth().onAuthStateChanged((function(e){e&&(document.querySelector("#name").value=e.displayName,document.querySelector(".picSelect img").src=e.photoURL,document.querySelector("#emailLink").value=e.email)})),document.getElementById("search").addEventListener("keyup",()=>{fetch("/data",{method:"POST",headers:{body:JSON.stringify(document.getElementById("search").value),"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{e.items.forEach(e=>{const t=e.fields;if(document.querySelector(".movieContainer").innerHTML="",t.hasOwnProperty("videoLink")){const e=`\n            <img src=${t.image.fields.file.url} alt="">\n           <p class="title" >${t.title} <a href=${t.downloadUrl} download><i class="fas fa-cloud-download-alt"></i></a> </p>\n           \n           <p id="description" style="display:none">\n             ${t.description["en-US"]}\n           </p>\n           <video src="${t.videoLink}"  controls style="width: 100%; height: auto; display:none"></video>\n          `,o=`<img src=${t.image.fields.file.url} alt=""> `,n=document.createElement("div"),l=document.createElement("div");l.className="previews",l.innerHTML=o,n.className="movie",n.innerHTML=e,document.querySelector(".movieContainer").append(n)}else{const e=`\n             <img src=${t.image.fields.file.url} alt="">\n            <p class="title" >${t.title} <a href=${t.downloadUrl} download><i class="fas fa-cloud-download-alt"></i></a> </p>\n            \n            <p id="description" style="display:none">\n              ${t.description}\n            </p>\n            <video src=""  controls style="width: 100%; height: auto; display:none"></video>\n            `,o=`<img src=${t.image.fields.file.url} alt=""> `,n=document.createElement("div"),l=document.createElement("div");l.className="previews",l.innerHTML=o,n.className="movie",n.innerHTML=e,document.querySelector(".movieContainer").append(n)}})}).catch(console.error)}),document.onreadystatechange=()=>{const e=document.querySelector(".loader");"loading"==document.readyState&&(e.classList.toggle("show"),document.body.style.overflow="hidden")};