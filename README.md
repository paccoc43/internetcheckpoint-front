# InternetCheckpoint

## 📌 Acerca del Proyecto

**InternetCheckpoint** es una red social donde los usuarios pueden compartir sus vivencias y experiencias. Otros usuarios pueden interactuar a través de comentarios en las publicaciones.

### Características Principales
- **Publicación de vivencias**: Los usuarios pueden crear posts para compartir sus experiencias con texto, imágenes y videos
- **Sistema de comentarios**: Permite que otros usuarios comenten en las publicaciones
- **Personalización de perfil**: Cada usuario puede personalizar su perfil
- **Personalización de posts**: Los usuarios pueden personalizar el estilo y contenido de sus publicaciones
- **Sistema de búsqueda**: Búsqueda de usuarios y contenido
- **Panel de administración**: Gestión de usuarios, publicaciones y tags

### Características Futuras
- Sistema de amigos
- Timeline de publicaciones
- Notificaciones en tiempo real

---

## 🛠️ Tecnologías Utilizadas

- [Node.js](https://nodejs.org) - Entorno de ejecución
- [Angular](https://angular.io) - Framework frontend
- [Angular Material](https://material.angular.io) - Componentes UI
- [Bootstrap](https://getbootstrap.com) - Framework CSS
- [AnimeJS](https://animejs.com) - Animaciones JavaScript

---

## 📋 Requisitos Previos

- [Node.js](https://nodejs.org) versión 18+ 
- npm (incluido con Node.js)
- Cualquier editor de código (VSCode, WebStorm, etc.)

---

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Ejecución en desarrollo

Inicia el servidor de desarrollo. La aplicación estará disponible en [http://localhost:4200](http://localhost:4200)

```bash
npm start
```

### Build para producción

```bash
npm run build
```

---

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/     # Componentes reutilizables
│   ├── pages/          # Páginas principales
│   ├── services/       # Servicios de comunicación con API
│   ├── models/         # Modelos e interfaces de datos
│   ├── guard/          # Guards de autenticación y autorización
│   └── utils/          # Utilidades y funciones auxiliares
├── assets/             # Recursos estáticos
└── styles/             # Estilos globales
```

---

## 📝 Scripts Disponibles

| Script | Descripción |
| --- | --- |
| `npm start` | Inicia el servidor de desarrollo |
| `npm run watch` | Compila el proyecto en modo observación (útil durante desarrollo) |
| `npm test` | Ejecuta la suite de pruebas |

---

## 🧪 Pruebas

Para ejecutar la suite completa de pruebas:

```bash
npm test
```

Las pruebas se ejecutan con Jasmine y Karma. Los archivos de prueba están en la carpeta `src/` con la extensión `.spec.ts`.

---

## 🔧 Desarrollo

### Estructura de Componentes

Los componentes principales incluyen:
- **Autenticación**: Login y registro de usuarios
- **Publicaciones**: Crear y visualizar publicaciones con personalización, incluyendo soporte para imágenes y videos
- **Comentarios**: Sistema de comentarios en publicaciones
- **Perfil**: Página de perfil personalizable del usuario
- **Búsqueda**: Búsqueda de usuarios
- **Admin**: Panel administrativo para gestión de contenido y tags

### Características Adicionales
- 🎨 **Sistema de emojis**: Integración con `ngx-emoji-mart` para selector de emojis
- 🎭 **Animaciones**: AnimeJS para efectos visuales suaves
- 📱 **Responsive**: Bootstrap 5 para diseño adaptable
- 🔐 **Autenticación**: Guards para proteger rutas según permisos

---

## 🐛 Reportar Problemas

Si encuentras bugs o tienes sugerencias, por favor abre un issue en el repositorio.do para producción 

---

## 📄 Licencia

Este proyecto es de código abierto.
