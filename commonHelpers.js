import{a as k,i as f,S as P}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();function h(o){return o.map(({id:t,webformatURL:a,largeImageURL:i,tags:e,likes:s,views:c,comments:L,downloads:S})=>`<li class="gallery-item" data-id='${t}'>
           <a class="gallery-link" href="${i}">
              <img
                class="gallery-image"
                src="${a}"
                alt="${e}"/>
                </div>
            </a>
            <div class="thumb-block">
              <div class="block">
                <h2 class="tittle">Likes</h2>
                <p class="amount">${s}</p>
              </div>
              <div class="block">
                <h2 class="tittle">Views</h2>
                <p class="amount">${c}</p>
              </div>
              <div class="block">
                <h2 class="tittle">Comments</h2>
                <p class="amount">${L}</p>
              </div>
              <div class="block">
                <h2 class="tittle">Downloads</h2>
                <p class="amount">${S}</p>
              </div>
    
          </li> `).join("")}const w=15;async function m(o,t){const a="43226276-a07a0c17e428cfffb021b9b05";return await k.get("https://pixabay.com/api/",{params:{key:a,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:w}})}const g=document.querySelector(".search-form"),u=document.querySelector(".gallery"),d=document.querySelector(".loader"),l=document.querySelector(".load-btn"),y=document.querySelector(".loader-more"),r=document.querySelector(".loader-message");let n=1;const b=15;let p="",v;d.style.display="none";y.style.display="none";l.style.display="none";r.style.display="none";g.addEventListener("submit",q);l.addEventListener("click",M);async function q(o){if(o.preventDefault(),n=1,u.innerHTML="",d.style.display="block",l.style.display="none",r.style.display="none",p=o.target.elements.search.value.trim(),!p){f.warning({title:"Caution",message:"Sorry, but you did not fill out the field!",position:"topRight",close:!1}),d.style.display="none";return}try{const{data:t}=await m(p,n);d.style.display="none";const a=Math.ceil(t.totalHits/b);if(n===a?(l.style.display="none",r.style.display="block"):l.style.display="block",!t.hits.length){f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",close:!1}),l.style.display="none",y.style.display="none",r.style.display="block";return}u.insertAdjacentHTML("beforeend",h(t.hits)),v=new P(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),g.reset()}catch(t){d.style.display="none",console.log(t)}}async function M(){n+=1,y.style.display="block",l.style.display="none",r.style.display="none";try{const{data:o}=await m(p,n);u.insertAdjacentHTML("beforeend",h(o.hits)),window.scrollBy({top:u.lastElementChild.getBoundingClientRect().height*2,left:0,behavior:"smooth"}),v.refresh();const t=Math.ceil(o.totalHits/b);if(n===t){f.info({title:"Caution",message:"We're sorry, but you've reached the end of search results.",position:"topRight",close:!1}),l.style.display="none",y.style.display="none",r.style.display="block";return}y.style.display="none",l.style.display="block"}catch(o){console.log(o)}}
//# sourceMappingURL=commonHelpers.js.map
