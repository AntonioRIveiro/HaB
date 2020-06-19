/**
 * Una tienda quiere ofrecer sus servicios online.
 * Para ello se dispone a digitalizar su catálogo y mostrarlo
 * en una web. Nos piden realizar la parte de backend, que debe
 * permitir añadir y modificar productos, para lo cual será
 * necesario que el usuario esté autenticado; y permitirá también
 * listar los productos existentes, que se podrá acceder
 * libremente.
 *
 * Notas:
 *   - no se pueden dar de alta usuarios. Deberá existir uno por
 * defecto para las tareas de administración.
 *   - la lista de productos puede llegar a ser muy grande, así
 * que el usuario deberá poder filtrarla mediante parámetros
 * enviados en la `querystring`
 *   - la estructura de un producto es la siguiente:
 *       {
 *           name: '',
 *           stock: <número de productos disponibles de este modelo>
 *           precio: 100
 *       }
 *
 */

require("dotenv").config();

const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const { login } = require("./controllers/users");
const { isAuthenticated } = require("./middlewares/auth");
const { add, list, update } = require("./controllers/products");

const port = process.env.PORT;

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/user/login", login);

// Todos pueden leer el catálogo
app.get("/product", list);

// Solo los usuarios autenticados pueden añadir elementos al catálogo
app.post("/product", isAuthenticated, add);

// Solo los usuarios autenticados pueden actualizar elementos al catálogo
app.put("/product", isAuthenticated, update);

app.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .send({ status: "error", message: error.message });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
