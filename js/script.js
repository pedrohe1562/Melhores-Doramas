/* ============================
   CENTRAL DAS SÉRIES
   script.js
============================ */

// Navbar muda ao rolar a página
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.style.background = "rgba(0,0,0,.95)";
        header.style.padding = "15px 8%";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";
    } else {
        header.style.background = "rgba(0,0,0,.65)";
        header.style.padding = "20px 8%";
        header.style.boxShadow = "none";
    }

});


// Fade ao aparecer na tela

const elementos = document.querySelectorAll(".card, .serie");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

elementos.forEach(el=>{

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = ".7s";

    observer.observe(el);

});


// Botão voltar ao topo

const btnTopo = document.createElement("button");

btnTopo.innerHTML = "↑";

btnTopo.classList.add("topo");

document.body.appendChild(btnTopo);

btnTopo.style.position = "fixed";
btnTopo.style.right = "25px";
btnTopo.style.bottom = "25px";
btnTopo.style.width = "50px";
btnTopo.style.height = "50px";
btnTopo.style.borderRadius = "50%";
btnTopo.style.border = "none";
btnTopo.style.background = "#E50914";
btnTopo.style.color = "#fff";
btnTopo.style.fontSize = "22px";
btnTopo.style.cursor = "pointer";
btnTopo.style.display = "none";
btnTopo.style.zIndex = "9999";
btnTopo.style.transition = ".3s";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        btnTopo.style.display = "block";

    }else{

        btnTopo.style.display = "none";

    }

});

btnTopo.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


// Efeito nos botões

document.querySelectorAll("a").forEach(botao=>{

    botao.addEventListener("mouseenter",()=>{

        botao.style.transition=".3s";

    });

});