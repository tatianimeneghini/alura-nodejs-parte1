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
    response.marko(
        require("../views/livros/lista/lista.marko")
    );
});
}