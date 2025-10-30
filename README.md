# Aplicación de Personajes con React + Vite

Esta aplicación web está desarrollada con React y Vite, diseñada para mostrar y gestionar una colección de personajes de manera interactiva. El proyecto incluye dos implementaciones diferentes:

- `_App.jsx`: Implementación con datos locales de Rick and Morty almacenados en `/data/personajes.json`
- `App.jsx`: Versión que consume la API de Dragon Ball y almacena los datos en localStorage

## Características

- 🎴 Visualización de tarjetas de personajes
- 💾 Almacenamiento local de datos
- 🎨 Interfaz moderna y responsive
- ⚡ Desarrollo rápido con Vite
- 🔄 Actualizaciones en tiempo real (HMR)

## Estructura del Proyecto

```
src/
  ├── componentes/    # Componentes React reutilizables
  │   └── Tarjeta.jsx # Componente de tarjeta de personaje
  ├── data/          # Datos y configuraciones
  │   ├── personajes.js
  │   └── personajes.json
  ├── utils/         # Utilidades y funciones auxiliares
  │   ├── almacenamiento.js
  │   └── llamadas.js
  └── assets/        # Recursos estáticos
```

## Instalación

1. Clona este repositorio
2. Instala las dependencias:
```bash
npm install
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run lint` - Ejecuta el linter para verificar el código

## Tecnologías Principales

- React 
- Vite
- ESLint para calidad de código
- CSS Moderno

## APIs y Almacenamiento

- Rick and Morty - Datos almacenados localmente en `personajes.json`
- [Dragon Ball API](https://dragon-ball-api.com/) - Consultada en tiempo real desde `App.jsx` y datos guardados en localStorage

## Contribución

Las contribuciones son bienvenidas. Por favor, asegúrate de actualizar las pruebas según corresponda.

## Licencia

Este proyecto está bajo la Licencia MIT.

---
Desarrollado con ❤️ usando React + Vite
