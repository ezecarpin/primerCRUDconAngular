const express = require('express');
const app = express();

const port = process.env.port || 3000;

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
	res.render("index", {titulo : "mi titulo dinamico"});
})

app.get('/servicios', (req, res) => {
	res.render("servicios", {titulo:"Servicios", descripcion: "Esta es la pagina de servicios"});
})

app.use((req, res, next) => {
	res.status(404).render("404", {titulo: "Pagina 404", descripcion: "Esta pagina no existe"});
})


app.listen(port, () => {
	console.log(`servidor a su servicio en el puerto {$ port }`);
})