const LivroDao = require("../infra/livro-dao");
const db = require("../../config/database");

module.exports = (app) => {

app.get("/", (request, response) => {
    response.send(`<html>
        <head>
            <meta charset="utf-8">
        </head>
        <body>
            <h1>Primeiro Servidor Node.js</h1>
            <h4>Parte 1 do curso Node.js: Inovando com JavaScript no backend do Alura.</h4>
        </body>
    </html>`)
});
    
app.get("/livros", function(request, response) {
    const livroDao = new LivroDao(db);
    livroDao.lista()
            .then(livros => response.marko(
                require("../views/livros/lista/lista.marko"),
                {
                    livros: livros
                }
            ))
            .catch(erro => console.log(erro));
    //livroDao.lista(function(erro, resultados) {
      
    });

    app.get("/livros/form", function(request, response) {
        response.marko(require("../views/livros/form/form.marko"))
    });

    app.post("/livros", function(request, response) {
        console.log(request.body);
        const livroDao = new LivroDao(db);
        livroDao.adiciona(request.body)
            .then(response.redirect("/livros"))
            .catch(erro => console.log(erro));
    });

    app.get("/livro/:id", function(request, response) {
        console.log(request.body);
        const livroDao = new LivroDao(db);
        livroDao.buscaPorId(request.body)
            .then()
    });

    app.patch("/livros", function(request, response) {
        console.log(request.body);
        const livroDao = new LivroDao(db);
        livroDao.atualiza(request.body)
            .then(response.redirect("/livros"))
            .catch(error => console.log(erro));
    });

    app.delete("/livros/:id", function(request, response) {
        const id = request.params.id;
        const livroDao = new LivroDao(db);
        livroDao.remove(id)
        .then(() => response.status(200).end())
        .catch(erro => console.log(erro));
    });

};