import"./assets/styles-Bk5DNWM-.js";import{a as p}from"./assets/vendor-CNNbG8jS.js";const g="https://api.themoviedb.org/3",l="/trending/movie/week",d="17b255e445f4b5417effc585e89e7d25",s=document.querySelector(".js-movie-list"),m=document.querySelector(".js-guard"),u={root:null,rootMargin:"300px",threshold:0},f=new IntersectionObserver(v,u);let a=1;async function n(e=1){const{data:o}=await p(`${g}${l}`,{params:{api_key:d,page:e}});return o}function i(e){return e.map(({poster_path:o,release_date:r,original_title:t,vote_average:c})=>`
        <li class="movie-card">
            <img src="https://image.tmdb.org/t/p/w300${o}" alt="${t}">
            <div class="movie-info">
                <h2>${t}</h2>
                <p>Release Date: ${r}</p>
                <p>Vote Average: ${c}</p>
            </div>
        </li>
    `).join("")}n().then(e=>{s.insertAdjacentHTML("beforeend",i(e.results)),e.page<e.total_pages&&f.observe(m)}).catch(e=>alert(e.message));function v(e,o){e.forEach(async r=>{if(r.isIntersecting){a+=1;try{const t=await n(a);s.insertAdjacentHTML("beforeend",i(t.results)),t.page>=t.total_pages&&o.unobserve(r.target)}catch(t){alert(t.message)}}})}
//# sourceMappingURL=1-task.js.map
