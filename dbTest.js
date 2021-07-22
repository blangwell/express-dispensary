const db = require('./models');
const makeProduct = async () => {
	try {
		let product = await db.Product.create({
			name: "A strain",
			price: 19.99,
			description: "A really good strain",
			imageUrl: "http://www.google.com"
		});
		console.log(product)
	} catch (err) {
		console.log("DB ERROR => " + err);
	}
}

makeProduct();