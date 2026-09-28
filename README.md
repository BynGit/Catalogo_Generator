# Catálogos Generator

Aplicación web desarrollada con Astro para facilitar la descarga de catálogos en PDF. El usuario selecciona una marca, ingresa el número de campaña y solicita el archivo correspondiente.

## Catálogos disponibles

- Novaventa Catálogo 1
- Novaventa Catálogo 2
- Yanbal
- Carmel
- Pacifika
- Loguin

Los enlaces actualmente están configurados para catálogos de 2026. La disponibilidad depende de que cada sitio de origen publique el catálogo de la campaña solicitada.

## Requisitos

- Node.js `>=22.12.0`
- pnpm

## Instalación y ejecución

Desde la raíz del proyecto, instala las dependencias y ejecuta el servidor local:

```sh
pnpm install
pnpm dev
```

Astro mostrará en la terminal la dirección local, que normalmente es `http://localhost:4321`.

Para generar y previsualizar una compilación de producción:

```sh
pnpm build
pnpm preview
```

## Uso

1. Selecciona el campo de la marca cuyo catálogo necesitas.
2. Ingresa el número de campaña.
3. Presiona **Descargar** y espera mientras se solicita el PDF.

El servidor consulta la URL del catálogo y devuelve el archivo para su descarga. Si el catálogo no está disponible en el sitio de origen, la solicitud puede fallar.

## Estructura principal

```text
public/                 Recursos estáticos, incluido el ícono de carga
src/
	components/           Interfaz de catálogos y controles de descarga
	layouts/              Estructura compartida de página
	pages/
		api/                 Endpoint que obtiene y devuelve los PDF
		index.astro          Página principal
	styles/                Estilos de la página
```

## Comandos disponibles

| Comando          | Descripción                                     |
| ---------------- | ----------------------------------------------- |
| `pnpm dev`       | Inicia el servidor de desarrollo.               |
| `pnpm build`     | Genera la compilación de producción en `dist/`. |
| `pnpm preview`   | Sirve localmente la compilación generada.       |
| `pnpm astro ...` | Ejecuta comandos de la CLI de Astro.            |

## Uso del proyecto

Este proyecto es sin fines de lucro y se utiliza únicamente para ayudar en la descarga de catálogos de revistas.
