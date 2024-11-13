let productContainer = document.getElementById("product-grid");

document.getElementById("sort").addEventListener("change", (event) => {
  const sortOption = event.target.value;
  const productCards = [...document.querySelectorAll(".product-card")];

  productCards.sort((a, b) => {
    const priceA = parseFloat(
      a.querySelector(".price").textContent.replace("Rs. ", "")
    );
    const priceB = parseFloat(
      b.querySelector(".price").textContent.replace("Rs. ", "")
    );
    return sortOption === "high-to-low" ? priceB - priceA : priceA - priceB;
  });

  const productGrid = document.querySelector(".product-grid");
  productGrid.innerHTML = "";
  productCards.forEach((card) => productGrid.appendChild(card));
});

async function getData() {
  const res = await fetch("https://run.mocky.io/v3/92348b3d-54f7-4dc5-8688-ec7d855b6cce?mocky-delay=500ms");
  const data = await res.json();
  console.log("data: ",data);

  data?.forEach((product) => {
    console.log("product name: ", product);
    let item = product?.product;
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.src = item?.images[0]?.src;
    img.alt = item?.images[0]?.alt;
    productCard.appendChild(img);

    const name = document.createElement("p");
    name.textContent = item?.title;
    productCard.appendChild(name);

    const price = document.createElement("p");
    price.classList.add('price');
    price.textContent = `Rs. ${item?.variants[0]?.price}`;
    productCard.appendChild(price);

    const button = document.createElement('button');
    button.classList.add('add-to-cart');

    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-shopping-cart');
    button.appendChild(icon);
    button.appendChild(document.createTextNode('ADD TO CART'));
    productCard.appendChild(button);

    productContainer.appendChild(productCard);
  });
}

getData();