import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      *//* empty css                      */import{a as p}from"./assets/vendor-CNNbG8jS.js";const m="https://api.themoviedb.org/3",g="/trending/movie/week",l="17b255e445f4b5417effc585e89e7d25",s=document.querySelector(".js-movie-list"),d=document.querySelector(".js-guard"),u={root:null,rootMargin:"300px",threshold:0},f=new IntersectionObserver(v,u);let a=1;async function n(e=1){const{data:o}=await p(`${m}${g}`,{params:{api_key:l,page:e}});return o}function i(e){return e.map(({poster_path:o,release_date:r,original_title:t,vote_average:c})=>`
        <li class="movie-card">
            <img src="https://image.tmdb.org/t/p/w300${o}" alt="${t}">
            <div class="movie-info">
                <h2>${t}</h2>
                <p>Release Date: ${r}</p>
                <p>Vote Average: ${c}</p>
            </div>
        </li>
    `).join("")}n().then(e=>{s.insertAdjacentHTML("beforeend",i(e.results)),e.page<e.total_pages&&f.observe(d)}).catch(e=>alert(e.message));function v(e,o){e.forEach(async r=>{if(r.isIntersecting){a+=1;try{const t=await n(a);s.insertAdjacentHTML("beforeend",i(t.results)),t.page>=t.total_pages&&o.unobserve(r.target)}catch(t){alert(t.message)}}})}
//# sourceMappingURL=1-task.js.map
