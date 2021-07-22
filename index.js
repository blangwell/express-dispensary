require('dotenv').config();
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const PORT = process.env.PORT;

const app = express();

app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('home');
}); 

app.use('/shop', require('./routes/shop'));

app.listen(PORT, async () => {
	console.log(`Listening on port ${PORT}`);
});