const express = require('express');
const router = express.Router();
// lets assume posts is being fetched from database
const posts = require('../posts.json');
const fileCtrl = require('../controllers/files');


/* GET . */
router.get('/csv', fileCtrl.downloadCsv);


module.exports = router;
