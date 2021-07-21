const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('SHOP HOME');
});

module.exports = router;