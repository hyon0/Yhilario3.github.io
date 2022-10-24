const $=(selector)=>document.querySelector(selector);
const baseURL='https://rickandmortyapi.com/api';
const btn=$('#consumir')
const contenedor=$('.container');

btn.addEventListener('click',async()=>{
    const resp=await fetch(`${baseURL}/character`)
    const {results}=await resp.json();
    let html='';
    results.forEach(personaje => {
        html+=`
            <img src="${personaje.image}" alt="">
            <p>${personaje.name}</p>
            <p>${personaje.status}</p>
            <p>${personaje.gender}</p>
        `
    });
    contenedor.innerHTML=html;
})