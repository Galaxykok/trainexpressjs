const express = require('express');
const router = express.Router();

router.get('/aa', (req, res) =>{res.send()});
router.post('/post', (req, res) => {});
router.put('/put', (req, res) =>{});
router.delete('/del', (req, res) =>{res.send});

module.exports = router;