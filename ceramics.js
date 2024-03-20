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
  // Ide írd a kódodat, ami a termék részletes nézetét megjeleníti
  // Pl.: Átirányítás a termék oldalra
  window.location.href = `product.html?id=${product.id}`;
}
