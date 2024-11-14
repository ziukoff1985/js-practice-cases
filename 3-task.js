import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      *//* empty css                      */const n="http://api.weatherapi.com/v1",o="edd1b78e40984fc0a09123641241411",s=document.querySelector(".js-search-form"),h=document.querySelector(".js-list");s.addEventListener("submit",i);function i(e){e.preventDefault();const{city:a,days:r}=e.currentTarget.elements;l(a.value,r.value).then(t=>{console.log("then",t),h.innerHTML=u(t.forecast.forecastday)}).catch(t=>{console.log("catch",t)})}function l(e="",a=1){const r=new URLSearchParams({key:o,q:e,days:a,lang:"uk"});return fetch(`${n}/forecast.json?${r}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}function u(e){return e.map(({date:a,day:{avgtemp_c:r,condition:{icon:t,text:c}}})=>`
        <li class="weather-card">
            <img class="weather-icon" src="${t}" alt="${c}">
            <h2 class="weather-date">${a}</h2>
            <h3 class="weather-text">${c}</h3>
            <h3 class="temperature">${r} °C</h3>
        </li>
    `).join("")}
//# sourceMappingURL=3-task.js.map
