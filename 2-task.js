import"./assets/styles-Bk5DNWM-.js";import{a as l}from"./assets/vendor-CNNbG8jS.js";const m="https://api.themoviedb.org/3",p="/trending/movie/week",g="17b255e445f4b5417effc585e89e7d25",c=document.querySelector(".js-movie-list"),t=document.querySelector(".js-load-more");t.addEventListener("click",u);let s=1;async function i(e=1){const{data:o}=await l(`${m}${p}`,{params:{api_key:g,page:e}});return o}i().then(e=>{c.insertAdjacentHTML("beforeend",n(e.results)),e.page<e.total_pages&&t.classList.replace("load-more-hidden","load-more")}).catch(e=>alert(e.message));function n(e){return e.map(({poster_path:o,release_date:a,original_title:r,vote_average:d})=>`
        <li class="movie-card">
            <img src="https://image.tmdb.org/t/p/w300${o}" alt="${r}">
            <div class="movie-info">
                <h2>${r}</h2>
                <p>Release Date: ${a}</p>
                <p>Vote Average: ${d}</p>
            </div>
        </li>
    `).join("")}async function u(){s+=1,t.disabled=!0;try{const e=await i(s);c.insertAdjacentHTML("beforeend",n(e.results)),e.page>=e.total_pages&&t.classList.replace("load-more","load-more-hidden");const a=document.querySelector(".movie-card").getBoundingClientRect().height;window.scrollBy({left:0,top:a,behavior:"smooth"})}catch(e){alert(e.message)}finally{t.disabled=!1}}
//# sourceMappingURL=2-task.js.map
