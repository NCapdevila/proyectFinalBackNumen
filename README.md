
# Proyect Final BackEnd Numen


Creation of a server in node that uses routes for communication with the database

Routes that make up a crud

Route validation with express-validator

Middleware creation

Connection with external api

---

Data for the connection in .env

## Deploy in Render

## Running Tests

To run tests, run the following command

```bash
  npm install (install dependencies)
  npm run dev
```


## Test router

Performing the test from Postman

Routes:

https://backendnumen.onrender.com/instrumentos/guitarras/vertodo (method get)

https://backendnumen.onrender.com/instrumentos/guitarras/ver/:id (method get)(requires req.params.id)

https://backendnumen.onrender.com/instrumentos/guitarras/crear (method post) (requires req.body)

https://backendnumen.onrender.com/instrumentos/guitarras/editar/:id (method put) (requires req.params.id, req.body)

https://backendnumen.onrender.com/instrumentos/guitarras/borrar/:id (method delete) (requires req.params.id)

https://backendnumen.onrender.com/instrumentos/guitarras/borrar (method delete)

External Api:

https://backendnumen.onrender.com/peliculas/populares (method get)







