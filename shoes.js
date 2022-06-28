function renderShoes(){
const shoesWrapper = document.querySelector('.shoes')
console.log(shoesWrapper);
/*
`<div class="shoe-wrapper">
<figure class="shoe-img-wrapper shadow">
  <img class="shoe-img" src="./assets/shoe 12.png" alt="" />
</figure>
<div class="shoe-details">
  <div class="shoe-name">
    Jordan 1 Retro High OG University Blue
  </div>
  <div class="shoe-rating">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star-half-alt"></i>
  </div>
  <div class="shoe-price">
    <span class="shoe-price-slash">$599</span> $499
  </div>
</div>`
*/
}
setTimeout(() => {
    renderShoes();    
});


// FAKE DATA
function getShoes() {
    return [
      {
        id: 1,
        title: "Jordan 1 Retro High OG University Blue",
                  url: "assets/shoe 1.png",
        originalPrice: 49.95,
        salePrice: 14.95,
        rating: 4.5,
      },
      {
        id: 2,
        title: "Jordan 1 Retro High OG University Blue",
                  url: "assets/shoe 2.png",
        originalPrice: 49.95,
        salePrice: 14.95,
        rating: 4.5,
      },
      {
        id: 3,
        title: "Jordan 1 Retro High OG University Blue",
                  url: "assets/shoe 3.png",
        originalPrice: 49.95,
        salePrice: 14.95,
        rating: 4.5,
      },
      {
        id: 4,
        title: "Jordan 1 Retro High OG University Blue",
                  url: "assets/shoe 4.png",
        originalPrice: 49.95,
        salePrice: 14.95,
        rating: 4.5,
      },
      {
        id: 5,
        title: "Jordan 1 Retro High OG University Blue",
                  url: "assets/shoe 5.png",
        originalPrice: 49.95,
        salePrice: 14.95,
        rating: 4.5,
      },
      {
        id: 6,
        title: "Jordan 1 Retro High OG University Blue",
                  url: "assets/shoe 6.png",
        originalPrice: 49.95,
        salePrice: 14.95,
        rating: 4.5,
      },
      {
        id: 7,
        title: "Jordan 1 Retro High OG University Blue",
                  url: "assets/shoe 7.png",
        originalPrice: 49.95,
        salePrice: 14.95,
        rating: 4.5,
      },
      {
        id: 8,
        title: "Jordan 1 Retro High OG University Blue",
                  url: "assets/shoe 8.png",
        originalPrice: 49.95,
        salePrice: 14.95,
        rating: 4.5,
      },
      {
        id: 9,
        title: "Jordan 1 Retro High OG University Blue",
                  url: "assets/shoe 9.png",
        originalPrice: 49.95,
        salePrice: 14.95,
        rating: 4.5,
      },
      {
        id: 10,
        title: "Jordan 1 Retro High OG University Blue",
                  url: "assets/shoe 10.png",
        originalPrice: 49.95,
        salePrice: 14.95,
        rating: 4.5,
      },
      {
        id: 11,
        title: "Jordan 1 Retro High OG University Blue",
                  url: "assets/shoe 11.png",
        originalPrice: 49.95,
        salePrice: 14.95,
        rating: 4.5,
      },
      {
        id: 12,
        title: "Jordan 1 Retro High OG University Blue",
                  url: "assets/shoe 12.png",
        originalPrice: 49.95,
        salePrice: 14.95,
        rating: 4.5,
      },
     
    ];
  }