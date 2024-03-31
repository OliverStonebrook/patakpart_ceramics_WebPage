fetch("ceramic.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((products) => {
    const productListContainer = document.getElementById("illustrationContainer");
    products.forEach((product) => {
      // Termék elem létrehozása
      if (product.id > 100) {
      const productElement = document.createElement("div");
      productElement.classList.add("illustration");
      productElement.setAttribute(
        "id",
        product.name.toLowerCase().replace(/\s+/g, "-")
      ); // Az egyedi azonosító beállítása a termék neve alapján

      // Termék adatainak beállítása
      const productImage = document.createElement("img");
      productImage.setAttribute("src", product.image);
      productImage.setAttribute("alt", product.name);
      productImage.classList.add("illustrationImage");

      const productName = document.createElement("h2");
      productName.textContent = product.name;
      productName.classList.add("illustrationName");

      const productDescription = document.createElement("h4");
      productDescription.textContent = product.description;
      productDescription.classList.add("illustrationDes");

      

      // Termék elem hozzáadása a terméklistához
      productElement.appendChild(productImage);
      productElement.appendChild(productName);
      productElement.appendChild(productDescription);
      productListContainer.appendChild(productElement);
    

      }
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
