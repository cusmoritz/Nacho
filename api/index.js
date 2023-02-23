const express = require('express')
const router = express.Router()
const apiRouter = require('./posts')
const {fetchOnePost} = require('../db/posts');

router.use('/', apiRouter)



apiRouter.post('')
module.exports = router;