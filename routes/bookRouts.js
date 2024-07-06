const express = require('express')
const router = express.Router()

// middleware that is specific to this router
//1.get all category
router.get('/', (req, res) => {
    res.send('Book!')
  })
//2.get a category by id
router.get('/:bookid', (req, res) => {
    res.send(' id not given!')
  })
//3.add a category
router.post('/', (req, res) => {
    res.send('Got a POST request in book')
  })
//4.update a category
router.patch('/:bookid', (req, res) => {
    res.send('Got a patch request at /book')
  })
//5.delete a category
router.delete('/:bookid', (req, res) => {
    res.send('Got a DELETE request at /book')
  })


module.exports = router