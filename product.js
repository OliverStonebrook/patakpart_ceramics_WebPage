document.addEventListener("DOMContentLoaded", function () {
  // Ellenőrizze, hogy a URL tartalmazza-e az id paramétert
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  // Ellenőrizze, hogy az id paraméter üres-e vagy nem
  if (productId) {
    // Ha van id paraméter, akkor kérje le a termék részleteit és jelenítse meg
    fetch("ceramic.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((products) => {
        const product = products.find(
          (product) => product.id === parseInt(productId)
        );
        if (!product) {
          throw new Error("Product not found");
        }

        // Termék elem létrehozása
        const productElement = document.createElement("div");
        productElement.classList.add("productDetailed");
        productElement.setAttribute("id", "product-" + product.id);

        // Termék képeinek létrehozása és hozzáadása
        const productImageM = document.createElement("div");
        productImageM.classList.add("productElement0");
        const productMainImage = document.createElement("img");
        productMainImage.setAttribute("src", product.image);
        productMainImage.setAttribute("alt", product.name);
        productMainImage.setAttribute("id", "productImageViewer0");
        productImageM.appendChild(productMainImage);
        productElement.appendChild(productImageM);

        //small images
        const smallImages = document.createElement("div");
        smallImages.classList.add("smallImages");
        productElement.appendChild(smallImages);

        for (let i = 1; i < 4; i++) {
          const productImageContainer = document.createElement("div");
          productImageContainer.classList.add("productElement" + i);
          const productImage = document.createElement("img");
          if ((i == 1)) {
            productImage.setAttribute("src", product.image1);
          } else if ((i == 2)) {
            productImage.setAttribute("src", product.image2);
          } else if ((i == 3)) {
            productImage.setAttribute("src", product.image3);
          }

          productImage.setAttribute("alt", product.name);
          productImage.setAttribute("id", `productImageViewer${i}`);
          productImageContainer.appendChild(productImage);
          smallImages.appendChild(productImageContainer);
        }

        // Termék neve, ára és leírása
        const productText = document.createElement("div");
        productText.classList.add("productText");

        const productName = document.createElement("h2");
        productName.textContent = product.name;
        productName.setAttribute("id", "productName");
        productText.appendChild(productName);

        const productPrice = document.createElement("p");
        productPrice.textContent = product.price + "€";
        productPrice.setAttribute("id", "productPrice");
        productText.appendChild(productPrice);

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;
        productDescription.setAttribute("id", "productDescription");
        productText.appendChild(productDescription);

        const addToCart = document.createElement("h3");
        addToCart.textContent = "Add to cart";
        addToCart.setAttribute("id", "addToCart");
        productText.appendChild(addToCart);

        document
          .getElementById("product-Container")
          .appendChild(productElement);
        document.getElementById("product-Container").appendChild(productText);

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
    console.error("No product id found in URL");
  }
});
