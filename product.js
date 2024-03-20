fetch("ceramic.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((products) => {
    const productListContainer = document.getElementById("product-list");
    products.forEach((product) => {
      // Termék elem létrehozása
      const productElement = document.createElement("div");
      productElement.classList.add("product");
      productElement.setAttribute(
        "id",
        product.name.toLowerCase().replace(/\s+/g, "-")
      ); // Az egyedi azonosító beállítása a termék neve alapján

      // Termék adatainak beállítása
      const productImage = document.createElement("img");
      productImage.setAttribute("src", product.image);
      productImage.setAttribute("alt", product.name);
      productImage.classList.add("image");

      const productName = document.createElement("h2");
      productName.textContent = product.name;
      productName.classList.add("itemName");

      const productPrice = document.createElement("p");
      productPrice.textContent = product.price + "€";
      productPrice.classList.add("itemPrice");

      // Termék elem hozzáadása a terméklistához
      productElement.appendChild(productImage);
      productElement.appendChild(productName);
      productElement.appendChild(productPrice);
      productListContainer.appendChild(productElement);

      // Eseménykezelő hozzáadása a termék elemekhez
      productElement.addEventListener("click", () => {
        showProductDetails(product);
      });
    });
  })
  .catch((error) =>
    console.error("There was a problem with the fetch operation:", error)
  );

function showProductDetails(product) {
  // Törölje az összes többi terméket a listáról
  const productListContainer = document.getElementById("product-list");
  while (productListContainer.firstChild) {
    productListContainer.removeChild(productListContainer.firstChild);
  }

  // Jelenítse meg csak az adott termék részleteit
  const productDetailsContainer = document.createElement("div");
  productDetailsContainer.classList.add("product-details");

  const productImage = document.createElement("img");
  productImage.setAttribute("src", product.image);
  productImage.setAttribute("alt", product.name);
  productImage.classList.add("image");

  const productName = document.createElement("h1");
  productName.textContent = product.name;
  productName.classList.add("itemName");

  const productPrice = document.createElement("p");
  productPrice.textContent = product.price + "€";
  productPrice.classList.add("itemPrice");

  productDetailsContainer.appendChild(productImage);
  productDetailsContainer.appendChild(productName);
  productDetailsContainer.appendChild(productPrice);

  productListContainer.appendChild(productDetailsContainer);
}
