import{a as P,i as p,S as k}from"./assets/vendor-09d7c26e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();function g(s){return s.map(({id:e,webformatURL:r,largeImageURL:i,tags:t,likes:o,views:a,comments:S,downloads:L})=>`<li class="gallery-item" data-id='${e}'>
           <a class="gallery-link" href="${i}">
              <img
                class="gallery-image"
                src="${r}"
                alt="${t}"/>
                </div>
            </a>
            <div class="thumb-block">
              <div class="block">
                <h2 class="tittle">Likes</h2>
                <p class="amount">${o}</p>
              </div>
              <div class="block">
                <h2 class="tittle">Views</h2>
                <p class="amount">${a}</p>
              </div>
              <div class="block">
                <h2 class="tittle">Comments</h2>
                <p class="amount">${S}</p>
              </div>
              <div class="block">
                <h2 class="tittle">Downloads</h2>
                <p class="amount">${L}</p>
              </div>
    
          </li> `).join("")}const q=15;async function f(s,e){const r="43226276-a07a0c17e428cfffb021b9b05";try{return s.includes(" ")&&(s=s.replace(/\s+/g,"+")),await P.get("https://pixabay.com/api/",{params:{key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:q}})}catch(i){p.error({title:"Error",message:"Sorry! The site is currently unavailable. Please try later!"}),console.error(i.message)}}const m=document.querySelector(".search-form"),h=document.querySelector(".gallery"),c=document.querySelector(".loader"),l=document.querySelector(".load-btn"),y=document.querySelector(".loader-more"),d=document.querySelector(".loader-message");let n=1;const b=15;let u="",v;c.style.display="none";y.style.display="none";l.style.display="none";d.style.display="none";m.addEventListener("submit",w);l.addEventListener("click",M);function w(s){if(s.preventDefault(),n=1,h.innerHTML="",c.style.display="block",l.style.display="none",d.style.display="none",u=s.target.elements.search.value.trim(),!u){p.warning({title:"Caution",message:"Sorry, but you did not fill out the field!",position:"topRight",close:!1}),c.style.display="none";return}f(u,n).then(({data:e})=>{c.style.display="none";const r=Math.ceil(e.totalHits/b);if(n===r?(l.style.display="none",d.style.display="block"):l.style.display="block",!e.hits.length){p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",close:!1});return}h.insertAdjacentHTML("beforeend",g(e.hits)),v=new k(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),m.reset()}).catch(e=>{c.style.display="none",console.log(e)})}function M(){n+=1,y.style.display="block",l.style.display="none",d.style.display="none";const s=()=>document.querySelector(".gallery-item").getBoundingClientRect();f(u,n).then(({data:e})=>{h.insertAdjacentHTML("beforeend",g(e.hits)),window.scrollBy({top:s().height*2,left:0,behavior:"smooth"}),v.refresh();const r=Math.ceil(e.totalHits/b);if(n===r){p.info({title:"Caution",message:"We're sorry, but you've reached the end of search results.",position:"topRight",close:!1}),l.style.display="none",y.style.display="none",d.style.display="block";return}y.style.display="none",l.style.display="block",$(h)}).catch(e=>console.log(e))}function $(s){const r=s.firstElementChild.getBoundingClientRect().height*2;window.scrollBy({top:r,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
