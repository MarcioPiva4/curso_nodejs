import express from 'express';
import conectaNaDataBase from './config/dbConnect.js';
import routes from './routes/index.js';

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
    console.error(erro);
});

conexao.once('open', () => {
    console.log("conexao com o banco feita")
})

const app = express();
routes(app);

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("livro removido com sucesso");
})

export default app;