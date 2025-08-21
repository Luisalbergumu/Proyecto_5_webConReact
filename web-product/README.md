# Mi Proyecto React: Fake Store

Una aplicación web interactiva de comercio electrónico construida con **React**, **Vite** y **Material-UI (MUI)**. El proyecto consume una API pública para mostrar productos y permite a los usuarios interactuar con la interfaz a través de filtros y una navegación intuitiva.

##  Características Principales

* **SPA (Single Page Application):** Navegación fluida y rápida con React Router.
* **Gestión de Datos:** Consumo de la API pública [Fake Store API](https://fakestoreapi.com/) para obtener datos de productos.
* **Estado y Lógica:** Uso de Hooks de React (`useState` y `useEffect`) para manejar el estado de la aplicación y realizar operaciones asíncronas.
* **Filtrado Local:** Filtrado de productos por categoría para una experiencia de usuario más ágil.
* **Manejo de Errores:** Implementación de `Error Boundaries` para manejar errores de renderizado de manera elegante.
* **Diseño Moderno:** Interfaz de usuario visualmente atractiva y limpia con la ayuda del framework de componentes Material-UI (MUI).

##  Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/mi-proyecto-react.git](https://github.com/tu-usuario/mi-proyecto-react.git)
    ```
2.  **Navega a la carpeta del proyecto:**
    ```bash
    cd mi-proyecto-react
    ```
3.  **Instala las dependencias:**
    ```bash
    npm install
    ```

##  Uso

1.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
2.  **Accede a la aplicación:**
    Abre tu navegador y visita la URL proporcionada en la terminal (generalmente `http://localhost:5173/`).

## Estructura del Proyecto

* `src/components/`: Contiene componentes reutilizables como el filtro de categorías.
* `src/pages/`: Contiene los componentes de las diferentes páginas de la aplicación (Inicio y Productos).
* `src/imagen/`: Contiene las imágenes locales del proyecto.

## Control de Versiones

Este proyecto sigue una metodología de desarrollo de  `commits` diarios para documentar el progreso. Cada `commit` representa un avance funcional y visible.

---