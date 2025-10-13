const fetchingData = async () => {
  const response = await fetch("http://localhost:1111/products", { method: "GET" });
  const products = await response.json();

  const sectionProducts = document.querySelector("#products");
  sectionProducts.innerHTML = "";

  products.forEach(product => {
    sectionProducts.innerHTML += `
      <article class="card">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p><strong>Categoría:</strong> ${product.category}</p>
        <p class="price">$${product.price}</p>
        <p class="stock">Stock disponible: ${product.stock}</p>
        <a href="#" class="btn">Agregar al carrito</a>
      </article>
    `;
  });
};

fetchingData();
