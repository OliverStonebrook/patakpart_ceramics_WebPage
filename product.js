document.addEventListener("DOMContentLoaded", function() {
  // Ellenőrizze, hogy a URL tartalmazza-e az id paramétert
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  // Ellenőrizze, hogy az id paraméter üres-e vagy nem
  if(productId) {
    // Ha van id paraméter, akkor kérje le a termék részleteit és jelenítse meg
    fetch("ceramic.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((products) => {
      const product = products.find(product => product.id === parseInt(productId));
      if (!product) {
        throw new Error("Product not found");
      }

      // Termék elem létrehozása
      const productElement = document.createElement("div");
      productElement.classList.add("productDetailed");
      productElement.setAttribute("id", "product-" + product.id);

      // Termék adatainak beállítása
      const productImage = document.createElement("img");
      productImage.setAttribute("src", product.image);
      productImage.setAttribute("alt", product.name);
      productImage.classList.add("productimage");

      const productImage1 = document.createElement("img");
      productImage1.setAttribute("src", product.image);
      productImage1.setAttribute("alt", product.name);
      productImage1.classList.add("productimage1");

      const productImage2 = document.createElement("img");
      productImage2.setAttribute("src", product.image);
      productImage2.setAttribute("alt", product.name);
      productImage2.classList.add("productimage2");

      const productImage3 = document.createElement("img");
      productImage3.setAttribute("src", product.image);
      productImage3.setAttribute("alt", product.name);
      productImage3.classList.add("productimage3");

      const productName = document.createElement("h2");
      productName.textContent = product.name;
      productName.classList.add("productName");

      const productPrice = document.createElement("p");
      productPrice.textContent = product.price + "€";
      productPrice.classList.add("productPrice");

      const productDescription = document.createElement("p");
      productDescription.textContent = product.description;
      productDescription.classList.add("productDescription");

      // Termék elem hozzáadása a terméklistához
      productElement.appendChild(productImage);
      productElement.appendChild(productImage1);
      productElement.appendChild(productImage2);
      productElement.appendChild(productImage3);
      productElement.appendChild(productName);
      productElement.appendChild(productPrice);
      productElement.appendChild(productDescription);

      document.getElementById("product-list").appendChild(productElement);

      // Eseménykezelő hozzáadása a termék elemekhez
      productElement.addEventListener("click", () => {
        showProductDetails(product);
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
  } else {
    console.error('No product id found in URL');
  }
});
