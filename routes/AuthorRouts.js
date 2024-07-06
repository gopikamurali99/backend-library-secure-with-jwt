const express = require('express')
const router = express.Router()

// middleware that is specific to this router
//1.get all Author
router.get('/', (req, res) => {
    res.send('author name not written!')
  })
//2.get a Author by id
router.get('/:authorid', (req, res) => {
    res.send(' id not written for author!')
  })
//3.add a Author
router.post('/', (req, res) => {
    res.send('Got a POST request in author')
  })
//4.update a Author
router.patch('/:authorid', (req, res) => {
    res.send('Got a patch request at /author')
  })
//5.delete a Author
router.delete('/:authorid', (req, res) => {
    res.send('Got a DELETE request at /author')
  })


module.exports = router