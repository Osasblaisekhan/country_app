const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const container = document.getElementById('container-result');

export default class DisplayDAta {
  constructor() {
    const fetchData = async () => {
      const countryName = searchInput.value.trim();
      const finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
      const response = await fetch(finalUrl);
      const res = await response.json();
      //   console.log(res[0]);

      const subContainer = document.createElement('div');
      container.innerHTML = '';

      subContainer.innerHTML = `
           <div class="name-flag">
           <div>
           <h1>${res[0]?.name.common}</h1>
           <img  src="${res[0]?.flags.svg}" alt="${res[0]?.name.common}">
           </div>
           <div>
           <h1>The Coat Of Arm</h1>
           <img class="picture" src="${res[0]?.coatOfArms.png}" alt="${res[0]?.name.common}">
           </div>
           </div>
           <div class="information">
            <h2>Official Name:<span>${res[0].name.official}</span></h2>
           <h2>Capital:<span>${res[0]?.capital}</span></h2>
           <h2>Continent:<span>${res[0]?.continents}</span></h2>
           <h2>Land Mass:<span>${res[0]?.area}km</span></h2>
           <h2>Population Census:<span>${res[0]?.population}</span></h2>
           <h2>Common Language:<span>${Object.values(res[0]?.languages)}</span></h2>
           <h2>Region In The World:<span>${res[0].region}</span></h2>
           <h2>Currency Used:<span>${res[0]?.currencies ? Object.values(res[0]?.currencies).map((currency) => currency.name).join(', ') : 'N/A'}</span></h2>
       
            <h2>Is The Country Independent:<span>${res[0].independent}</span></h2>
             <h2>Subregion In The World:<span>${res[0].subregion}</span></h2>
              <h2>Country Borders:<span>${res[0].borders}</span></h2>
              
       
           </div>
           
           `;
      container.appendChild(subContainer);
      return res;
    };
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      fetchData();
      searchInput.value = '';
    });
  }
}
