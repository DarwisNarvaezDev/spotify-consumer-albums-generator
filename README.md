# spotify-consumer-api-artist-albums-generator
> Un servicio REST escrito en Javascript para correr con Node.js, que consume servicios REST de Spotify para retornar un vector con información de los albumes del artista que le pasemos por query a través de la URI que llama al servicio - Desarrollado por Darwis Narváez (con cariño) :bowtie:.

## Instalación

- Navegar hasta una carpeta elejida por el usuario y clonar el repositorio: `git clone https://github.com/DarwisNarvaezDev/spotify-consumer-api-artist-album-generator.git` 
- Luego, instalamos los paquetes de Node.js necesarios para correr el programa localmente: `npm start`
_Nota: En caso de no tener Node.js instalado en tu sistema, por favor ve a la [Sitio oficial de Node.js](https://nodejs.org/es/) y sigue los pasos.
- **IMPORTANTE**: Para que el servicio funcione correctamente, es necesario crear variables de entorno com el 'Client_id' y el 'Client_secret' de tu cuenta de desarrollador de Spotify, para ello, tendremos que crear un archivo '.env' en la carpeta raíz del proyecto con los valores:
```
CLIENT_ID=<Spotify client id>
CLIENT_SECRET=<Spotify client secret>
```
_De todas formas, dejé una pequeña prueba previa a la ejecución de la app para recordartelo_ :wink:

- Una vez creadas las variables e instalados los paquetes, subimos el servicio: `npm run please` (custom script para correr la prueba y subir el servicio). Despues de unos segundos deberás de ver esto:

> [Spotify Consumer App][Saturday, January 8, 2022 - 16:26:2] Service up!


# Información de consulta:

- La API tiene una única URI de consulta por defecto (como se pidió): `http:localhost:8081/api/v1/albums`, se consulta con una petición de tipo 'GET' y para que nos devuelva el resultado esperado tenemos que pasarle un query param: Ej: `http://localhost:8081/api/v1/albums?q=Black Sabbath`, de lo contrario nos devolverá un 400 y un response body de error:

> {
> status: "Bad request",
> message: "Artist name not provided."
> }

- Se trata de una API REST, por lo que puede ser consultada a través de cualquier medio que haga una petición http valida (ej: Postman, Linux Bash), corriendo:

[Linux Bash]
```
curl -i -H "Accept: application/json" -H "Content-Type: application/json"  http://localhost:8081/api/v1/albums?q=Led Zeppelin
```
[Postman]
```
http://localhost:8081/api/v1/albums?q=Led Zeppelin
```

_Muchas gracias por permitirme participar en este proceso, fué muy divertido hacer la API. Espero mantener el contacto, saludos! - DN 🙋‍♂️_
