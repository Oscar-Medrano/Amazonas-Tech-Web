# Amazonas Tech, C.A. — Sitio Web Corporativo

Sitio corporativo de **Amazonas Tech, C.A.** (RIF: J-311095225-5), empresa venezolana fundada en 2004, especializada en servicios a pozos, control de sólidos y gestión ambiental para la industria petrolera nacional.

## Stack

- **React 19 (JSX)** — componentes funcionales modulares
- **Vite 8** — build y desarrollo
- **Tailwind CSS 3.4** — tema claro con acentos verdes (emeralda) y detalles esmerilados
- Sin dependencias de UI ni animaciones externas: solo CSS nativo y `IntersectionObserver`

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo → http://localhost:5173
npm run build      # build de producción → dist/
npm run preview    # previsualizar el build de producción
npm run lint       # análisis estático con oxlint
```

## Estructura

```
public/                 # assets públicos (logos, favicon, imágenes optimizadas)
  favicon.ico           # ícono generado desde icon.png
  icon.png / apple-touch-icon.png
  logo-amazonas-tech.png
  background-torre.jpg  # torre de perforación (fondo hero)
  img/                  # imágenes de operaciones, flota y aliados
src/
  components/
    Navbar.jsx          # barra fija estilo Apple + menú móvil
    Hero.jsx            # titular principal y pieza visual
    Stats.jsx           # indicadores corporativos
    About.jsx           # Misión, Visión y Política de Calidad
    TechSpecs.jsx        # pestañas interactivas (sólidos, ambiental, flota, obras, soldadura)
    Fleet.jsx            # Flota Especializada (galería de equipos)
    Clients.jsx          # Empresas aliadas
    SafetyHSE.jsx        # Calidad, Seguridad y Ambiente
    Locations.jsx        # Sedes Maturín y El Tigre con Google Maps embebido
    Empleo.jsx           # Sección Empleo con enlace a LinkedIn
    Footer.jsx contacts: direcciones y teléfonos
  hooks/useReveal.js    # revelado suave al hacer scroll
```

## Despliegue

El comando `npm run build` genera la carpeta `dist/` con rutas relativas (`base: './'`), lista para subirse a cualquier hosting estático (Nginx, Apache, cPanel, S3, Netlify, Vercel, etc.).

## Contacto de referencia

- Sede Maturín (Monagas): (0291) 315.17.12
- Base El Tigre (Anzoátegui): (0283) 241.76.94
- contacto@amazonastech.com.ve
