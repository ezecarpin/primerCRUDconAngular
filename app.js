const express = require('express');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 3000;

// Conexion a base de datos
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@cluster0.wnmjj.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority` ;

mongoose.connect(uri , 
	{useNewUrlParser: true, useUnifiedTopology: true}
	)
	.then(() => console.log('Base de datos conectada'))
	.catch(error => console.log(error))

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

//Rutas web
app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/Mascotas'));

app.use((req, res, next) => {
	res.status(404).render("404", {titulo: "Pagina 404", descripcion: "Esta pagina no existe"});
})


app.listen(port, () => {
	console.log('servidor a su servicio en el puerto', port);
})