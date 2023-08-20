const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", () => {
  // Código para cambiar a la segunda interfaz (Inicio de sesión)
  const container = document.querySelector(".container");
  container.innerHTML = `
    <div class="login">
      <h2>Iniciar sesión</h2>
      <input type="text" placeholder="Usuario">
      <input type="password" placeholder="Clave">
      <button id="loginBtn">Iniciar</button>
    </div>
  `;

  const loginBtn = document.getElementById("loginBtn");
  loginBtn.addEventListener("click", () => {
    // Código para cambiar a la tercera interfaz (Lista de productos)
    container.innerHTML = `
      <div class="products">
        <h2>Listado de Productos</h2>
        <div class="product">
          <img src="https://i.postimg.cc/MHmb0zZF/Snort.jpg" alt="Producto 1">
          <h3>Producto 1</h3>
          <p>Precio: $120.00</p>
          <button class="buy-btn">Comprar</button>
        </div>
        <div class="product">
          <img src="https://i.postimg.cc/hPxb9hSF/Captura-de-pantalla-2023-08-19-230417.png" alt="Producto 2">
          <h3>Producto 2</h3>
          <p>Precio: $151.00</p>
          <button class="buy-btn">Comprar</button>
        </div>
        <div class="product">
          <img src="https://i.postimg.cc/Wp0h8ZJ7/Captura-de-pantalla-2023-08-19-230501.png" alt="Producto 3">
          <h3>Producto 3</h3>
          <p>Precio: $143.00</p>
          <button class="buy-btn">Comprar</button>
        </div>
        <div class="product">
          <img src="https://i.postimg.cc/9QmRrf0Y/Captura-de-pantalla-2023-08-19-230654.png" alt="Producto 4">
          <h3>Producto 4</h3>
          <p>Precio: $30.00</p>
          <button class="buy-btn">Comprar</button>
        </div>
      </div>
    `;
  });
});

