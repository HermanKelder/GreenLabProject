(function() {

const apikey = 'octq5hfk8rkkwogg8k0kggg004c8gc4';
fetch(`https://api.w3.org/affiliations?is-member=1&with-testimonial=1&with-logo=1&embed=1&apikey=${apikey}`)
.then(response => response.json())
.then(data => {
  const affiliations = data._embedded.affiliations;
  const randomItem = affiliations[Math.floor(Math.random()*affiliations.length)];
  const link = randomItem._links.homepage.href;
  const name = randomItem.name;
  const logo = randomItem._links.logo.href.replace('/250/', '/120/');
  const testimonial = randomItem.testimonials.en;
  
  const div = `<div id="w3c_home_member_testimonials_choice"><p class="tPadding0">
           <a rel="nofollow" href="${link}" class="no-border">
              <img class="media" alt="${name} logo" src="${logo}" />
           </a>
        </p><h3>
           <a rel="nofollow" href="${link}">${name}</a>
        </h3><p>${testimonial}</p></div>
  `;

  const el = document.querySelector("#w3c_home_member_testimonials");
  el.insertAdjacentHTML('beforeend', div);
});
})()
