
# Prueba Técnica FullStack

Este proyecto es una aplicación web para gestionar personajes. La aplicación permite ver el detalle de cada personaje, editarlos, eliminarlos y cargar más personajes cuando sea necesario.

## Instalación y Configuración

1. Clona el repositorio.

2. Iniciar el Backend:

    Navega a la carpeta `/api`.
    Instala las dependencias: `npm install`.
    Inicia el servidor: `npm run dev`.

3. Iniciar el Frontend:

    Navega a la carpeta `client/`.
Instala las dependencias: `npm install`.
Inicia la aplicación: `npm run dev`.

5. Abre el navegador y navega a `http://localhost:5173`.
## Funcionalidades:

- Vista de personajes: Los personajes se muestran en tarjetas (Cards) con información clave como nombre, estado, especie, género y su lugar de origen.

- Detalle de personajes: Al seleccionar un personaje, se puede acceder a una página con más detalles del mismo.

- Edición y eliminación: Se incluyen botones para editar o eliminar un personaje directamente desde la tarjeta.
- Carga dinámica de personajes: Existe un botón para cargar más personajes, ejecutando una llamada al servidor y refrescando la lista de personajes mostrados.
- Interfaz amigable: Se utiliza la biblioteca Flowbite para el diseño visual de los componentes, ofreciendo una interfaz moderna y responsiva.


## Tecnologías

**Client:** React, TypeScript, TailwindCSS, Flowbite

**Server:** Node, Express, MongoDB, TypeScript