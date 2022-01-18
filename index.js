const express = require("express")
const path = require("path")

const app = express()

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html")
app.use("/public", express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "/views"));

var tarefas = ["Arrumar o quarto", "Comprar no supermercado"]

app.get("/", (req,res) => {

    res.render("index", {tarefasList: tarefas}) // segunda paramentro: parametro pra jogar um dado de uma api pro outro arquivo
})

app.get("/deletar/:id", (req, res) => {
    tarefas = tarefas.filter(function(val, index) {
        if(index != req.params.id){
            return val
        } 
    })
    res.render("index", {tarefasList: tarefas})
})

app.listen(5000, () => {
    console.log("Server Rodando!")
})