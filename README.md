# Descripción del proyecto

Este proyecto es una aplicación web desarrollada con Node.js, Express y Socket.IO para la administración de productos y carritos de compras en tiempo real. Además, la aplicación ofrece una interfaz sencilla y clara utilizando Handlebars y Bootstrap.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias del proyecto utilizando npm:

   ```bash
   npm install
   ```

## Uso

Para ejecutar la aplicación localmente, simplemente utiliza el siguiente comando:

   ```bash
   npm run dev
   ```
Esto iniciará el servidor en el puerto 8080. Puedes acceder a la API utilizando las rutas definidas en los archivos de rutas.

### Endpoints disponibles

#### Gestión de productos
- **GET /api/products** : Listar todos los productos.
- **GET /api/products/:pid** : Obtener un producto por su ID.
- **POST /api/products** : Crear un nuevo producto.
- **PUT /api/products/:pid** : Actualizar un producto existente.
- **DELETE /api/products/:pid** : Eliminar un producto.

#### Gestión de carritos
- **POST /api/carts** : Crear un nuevo carrito.
- **GET /api/carts/:cid** : Obtener un carrito por su ID.
- **POST /api/carts/:cid/product/:pid** : Añadir un producto a un carrito.

Recuerda reemplazar `:pid` y `:cid` con los IDs correspondientes.