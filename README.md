### Documentación del Paginado

Este módulo de la aplicación implementa un sistema de paginado para facilitar la visualización de un conjunto grande de productos, dividiéndolos en páginas más manejables. A continuación, se detalla su funcionamiento:

---

#### **Descripción General**

El sistema de paginado se implementa en dos componentes principales:

1. **ProductList**: Es el componente principal que muestra la lista de productos. Divide los productos en páginas y se encarga de gestionar la lógica para determinar qué elementos se deben renderizar en función de la página seleccionada.
2. **Paginacion**: Es el componente responsable de renderizar los controles de paginado, como botones para navegar entre páginas y destacar la página actual.

---

#### **Funcionalidad**

- **Cálculo de Páginas**:

  - Se calcula el número total de páginas necesarias dividiendo el número total de productos entre la cantidad de productos a mostrar por página.
  - Se genera un arreglo dinámico que contiene los números de página para iterar y renderizar los botones de navegación.

- **Navegación entre Páginas**:

  - El usuario puede cambiar de página utilizando los botones "Prev" (anterior) y "Next" (siguiente).
  - También puede hacer clic directamente en un número de página para navegar a esa página específica.

- **Estado del Componente**:
  - Se utiliza un estado local (`paginaActual`) para rastrear qué página está activa en un momento dado.
  - Los productos visibles cambian dinámicamente según el índice calculado a partir de la página activa.

---

#### **Interacciones**

- Los botones "Prev" y "Next" están deshabilitados cuando el usuario está en la primera o última página, respectivamente, para evitar errores.
- La página actual se resalta visualmente para que el usuario pueda identificar fácilmente en qué página se encuentra.

---

#### **Integración**

El componente de paginación se integra perfectamente con la lista de productos gracias a:

- La correcta segmentación de datos en base a los índices calculados.
- La comunicación entre el estado local del componente y las props compartidas con el componente `Paginacion`.

---

#### **Beneficios**

1. **Escalabilidad**: Mejora el rendimiento al mostrar solo una cantidad limitada de productos por vez.
2. **Usabilidad**: Facilita la navegación para el usuario al dividir los productos en páginas más pequeñas y manejables.
3. **Flexibilidad**: Permite adaptar la cantidad de productos por página o el diseño del paginado de manera sencilla.

---

Esta implementación asegura una experiencia de usuario fluida y un manejo eficiente de los datos en la interfaz.

Made by Prof. Martin with a lot of 💖 and ☕
