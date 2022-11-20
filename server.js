const jsonServer = require("json-server");
const server = jsonServer.create.apply();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(router);

server.listen(3000, () => {
    console.log("Running on http://localhost:3000")
});
