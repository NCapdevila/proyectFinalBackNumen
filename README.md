
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
  npm run dev
```


## Test router

Performing the test from Postman

Routes:
http://localhost8080/instrumentos/vertodo (method get)

http://localhost8080/instrumentos/ver/:id (method get)(requires req.params.id)

http://localhost8080/instrumentos/crear (method post) (requires req.body)

http://localhost8080/instrumentos/editar/:id (method put) (requires req.params.id, req.body)

http://localhost8080/instrumentos/borrar/:id (method delete) (requires req.params.id)

http://localhost8080/instrumentos/borrar (method delete)







