const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
  console.log("new:::")
  res.json({})
})

module.exports = router