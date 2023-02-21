
# Proyecto Final BackEnd Numen


Creación de un servidor en nodeJs que utiliza rutas con sus respectivos métodos http para la comunicación con la base de datos

Base de datos en MongoDb

Rutas que forman un crud

Validación de rutas con express-validator

Desarrollo de middleware propio

Conexión con api externa

---

Datos para la conexión en .env

## Deploy en Render

## Running Tests(De ser necesario)

Para ejecutar pruebas, ejecute el siguiente comando

```bash
  npm install
  npm run dev
```


## Test router

Realizar las pruebas desde Postman

Routes:

https://backendnumen.onrender.com/instrumentos/guitarras/vertodo (method get)

https://backendnumen.onrender.com/instrumentos/guitarras/ver/:id (method get)(requiere req.params.id)

https://backendnumen.onrender.com/instrumentos/guitarras/crear (method post) (requiere req.body)

https://backendnumen.onrender.com/instrumentos/guitarras/editar/:id (method put) (requiere req.params.id, req.body)

https://backendnumen.onrender.com/instrumentos/guitarras/borrar/:id (method delete) (requiere req.params.id)

https://backendnumen.onrender.com/instrumentos/guitarras/borrar (method delete)

Api Externa:

https://backendnumen.onrender.com/peliculas/populares (method get)







