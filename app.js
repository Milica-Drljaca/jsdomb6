let destinacija = document.getElementById("lista-destinacija");
console.log(destinacija);

let naslov=document.getElementsByClassName("title");
console.log(naslov);

let element=document.getElementsByTagName("li");
console.log(element);

let wrap=document.querySelector("#wrapper");
console.log(wrap);

let nekeDestinacije=document.querySelectorAll(".naziv");
console.log(nekeDestinacije);

let listaDestinacija=document.querySelector("#lista-destinacija");
console.log("Roditelj ovog cvora je", listaDestinacija.parentNode);

let listaDestinacija2=document.querySelector("#lista-destinacija");
console.log("Ovo su deca tog cvora", listaDestinacija2.children);
console.log(listaDestinacija2.childNodes);

let listaDestinacija3=document.querySelector("#lista-destinacija");
console.log("Ovo je next sibling", listaDestinacija3.nextElementSibling);

let listaDestinacija4=document.querySelector("#lista-destinacija");
console.log("Ovo je previous sibling", listaDestinacija3.previousElementSibling);

let banner=document.querySelector("#page-banner");
console.log("banner node name is", banner.nodeName);

let destinacijaFrancuska=document.querySelector(".naziv");
destinacijaFrancuska.textContent="Beograd, Srbija";

var dugmici=document.querySelectorAll(".obrisi");
console.log(dugmici);

Array.from(dugmici).forEach(function(dugme)
{

    dugme.addEventListener("click", function(e){
        const li=e.target.parentNode;
        ul=li.parentNode;
        ul.removeChild(li);
    })
})

let forme=document.forms;
console.log(forme);

