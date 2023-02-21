
# Proyect Final BackEnd Numen


Creation of a server in node that uses routes for communication with the database

Routes that make up a crud

Route validation with express-validator

Middleware creation

Connection with external api

---

Data for the connection in .env



## Running Tests

To run tests, run the following command

```bash
  npm install (install dependencies)
  npm run dev
```


## Test router

Performing the test from Postman

Routes:
https://backendnumen.onrender.com/instrumentos/vertodo (method get)

https://backendnumen.onrender.com/instrumentos/ver/:id (method get)(requires req.params.id)

https://backendnumen.onrender.com/instrumentos/crear (method post) (requires req.body)

https://backendnumen.onrender.com/instrumentos/editar/:id (method put) (requires req.params.id, req.body)

https://backendnumen.onrender.com/instrumentos/borrar/:id (method delete) (requires req.params.id)

https://backendnumen.onrender.com/instrumentos/borrar (method delete)

External Api:

https://backendnumen.onrender.com/peliculas/populares (method get)







