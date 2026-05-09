# Guía de Integración Backend -> Frontend (React)

¡El backend ya está listo para funcionar como un E-Commerce! Para conectarlo con tu Frontend en React, aquí tienes los pasos y recomendaciones a seguir.

---

## 1. Autenticación para la Demo
Dado que los carritos, favoritos y pedidos pertenecen a un **usuario específico**, todos los endpoints del backend están protegidos y requieren un **Token JWT**.
Como mencionaste que crearás un usuario directo desde el back, el flujo más fácil para tu demo es:
1. Registra un usuario de prueba en tu Backend (usando Postman u otra herramienta) a través de `POST /api/auth/register`.
2. Haz Login con ese usuario en `POST /api/auth/login` para obtener el `authToken`.
3. En tu Frontend (React), puedes guardar ese Token en el `localStorage` o incluso "hardcodearlo" temporalmente en tus peticiones de Axios/Fetch incluyéndolo en los headers:
   ```javascript
   headers: {
       "Authorization": `Bearer TU_TOKEN_AQUI`
   }
   ```

---

## 2. Productos: ¿Hardcodeados o del Backend?
Actualmente tienes `products.ts` en el Front. Puedes seguir usándolo para la UI, pero si quieres asegurarte de que el Front y el Back hablan el mismo idioma, te recomiendo hacer un `fetch` cuando cargue tu app:
* **Endpoint:** `GET /api/products`
* **Acción:** Guardar ese array en el estado global o Contexto que uses para mostrar el catálogo.

---

## 3. Adaptando el Carrito (El que ya tienes)
Actualmente seguro manejas el carrito con un estado local en React. Tienes que cambiar esas funciones para que avisen al backend:

* **Al cargar la página (o el Contexto):** 
  Llama a `GET /api/users/cart`. El backend te devolverá la lista del carrito con la cantidad y los datos del producto.
* **Al hacer click en "Añadir al carrito":**
  Llama a `POST /api/users/cart/{product.id}`. Puedes enviarle opcionalmente un `{ "quantity": 1 }` en el body si estás sumando más de uno a la vez.
* **Al eliminar del carrito:**
  Llama a `DELETE /api/users/cart/{product.id}`.

---

## 4. Creando la sección de Favoritos (Nueva)
Para implementar Favoritos, vas a necesitar añadir un icono de "Corazón" en tus tarjetas de producto.

* **Al cargar la página:**
  Llama a `GET /api/users/favorites`. Te devolverá la lista de productos favoritos. Te servirá para saber si el corazón debe ir pintado o vacío.
* **Al hacer click en el corazón (Toggle):**
  Llama a `POST /api/users/favorites/{product.id}`. Este endpoint es mágico: si el producto no está en favoritos, lo agrega; si ya está, lo quita automáticamente.

---

## 5. Creando la sección de Mis Pedidos (Nueva)
El flujo final del E-Commerce termina cuando el usuario "paga" su carrito.

* **El Botón de "Finalizar Compra" (En tu Carrito):**
  Al hacer clic en Checkout, solo debes llamar a `POST /api/orders` (sin pasarle nada, el back ya sabe qué hay en el carrito). 
  *Efecto en el backend:* Creará el pedido y **vaciará tu carrito automáticamente**. En el front, deberás mostrar un mensaje de "Éxito" y limpiar el estado del carrito local.
* **La vista de "Mis Pedidos":**
  Crea una página o componente nuevo. 
  Al montar el componente, llama a `GET /api/orders`.
  Te devolverá un historial con los detalles: qué productos se compraron, la fecha, y el `total` gastado. Simplemente mapea y renderiza esta lista de forma atractiva.
