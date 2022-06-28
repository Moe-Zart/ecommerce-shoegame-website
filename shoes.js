function renderShoes(filter) {
  const shoesWrapper = document.querySelector(".shoe-page-shoes");
  const shoes = getShoes();

  if (filter == "LOW-HIGH") {
    console.log(filter);
    shoes.sort(
      (a, b) =>
        (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)
    );
  } else if (filter === "HIGH-LOW") {
    shoes.sort(
      (a, b) =>
        (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)
    );
  } else if (filter === "RATING") {
    shoes.sort((a, b) => b.rating - a.rating);
  }

  const shoesHtml = shoes.map((shoe) => {
    return `<div class="shoe-wrapper">
<figure class="shoe-img-wrapper shadow">
  <img class="shoe-img" src="${shoe.url}" alt="" />
</figure>
<div class="shoe-details">
  <div class="shoe-name">
    ${shoe.title}
  </div>
  <div class="shoe-rating">
    ${ratingsHtml(shoe.rating)}
  </div>
  <div class="shoe-price">
    ${priceHtml(shoe.originalPrice, shoe.salePrice)}
    </div>
</div>
</div>`;
  });

  shoesWrapper.innerHTML = shoesHtml.join("");
  //sets the below into the html
}
function priceHtml(originalPrice, salePrice) {
  //
  if (!salePrice) {
    return `$${originalPrice}`;
  }
  return `<span class="shoe-price-slash">$${originalPrice}</span> $${salePrice}`;
}

function ratingsHtml(rating) {
  let ratingHTML = " ";
  for (let i = 0; i < Math.floor(rating); i++) {
    ratingHTML += '<i class="fas fa-star"></i>';
  }
  if (!Number.isInteger(rating)) {
    ratingHTML += '<i class="fas fa-star-half-alt"></i>';
  }
  return ratingHTML;
}
function filterShoes(event) {
  renderShoes(event.target.value);
}

setTimeout(() => {
  renderShoes(); //putting the function in a timeout makes it run at the end of the event loop
});

// FAKE DATA

function getShoes() {
  return [
    {
      id: 1,
      title: "Dunk Low Goldenrod",
      url: "./assets/shoe 1.png",
      originalPrice: 250,
      salePrice: null,
      rating: 5,
    },
    {
      id: 2,
      title: "Blazer Mid '77 Vintage White",
      url: "./assets/shoe 2.png",
      originalPrice: 150,
      salePrice: null,
      rating: 4.5,
    },
    {
      id: 3,
      title: "Yeezy Boost 350 V2 Zebra",
      url: "./assets/shoe 3.png",
      originalPrice: 399,
      salePrice: null,
      rating: 4.5,
    },
    {
      id: 4,
      title: "NMD Pharrell Human Race Triple Black",
      url: "./assets/shoe 4.png",
      originalPrice: 250,
      salePrice: null,
      rating: 4.5,
    },
    {
      id: 5,
      title: "Air Force 1 White/Black",
      url: "./assets/shoe 5.png",
      originalPrice: 150,
      salePrice: null,
      rating: 4.5,
    },
    {
      id: 6,
      title: "Jordan 1 Retro High OG Court Purple",
      url: "./assets/shoe 6.png",
      originalPrice: 350,
      salePrice: null,
      rating: 4.5,
    },
    {
      id: 7,
      title: "Ultraboost 4.0 DNA White",
      url: "./assets/shoe 7.png",
      originalPrice: 250,
      salePrice: null,
      rating: 4.5,
    },
    {
      id: 8,
      title: "Jordan 4 Retro Black Cat",
      url: "./assets/shoe 8.png",
      originalPrice: 750,
      salePrice: null,
      rating: 5,
    },
    {
      id: 9,
      title: "Jordan 1 Retro High Dior",
      url: "./assets/shoe 9.png",
      originalPrice: 15000,
      salePrice: 12000,
      rating: 4.5,
    },
    {
      id: 10,
      title: "Jordan 3 Retro Cardinal Red",
      url: "./assets/shoe 10.png",
      originalPrice: 399,
      salePrice: 299,
      rating: 4.5,
    },
    {
      id: 11,
      title: "Yeezy Boost 350 V2 Dazzling Blue",
      url: "./assets/shoe 11.png",
      originalPrice: 499,
      salePrice: null,
      rating: 4,
    },
    {
      id: 12,
      title: "Jordan 1 Retro High OG University Blue",
      url: "./assets/shoe 12.png",
      originalPrice: 599,
      salePrice: 499,
      rating: 4,
    },
  ];
}
