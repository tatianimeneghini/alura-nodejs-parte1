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
};